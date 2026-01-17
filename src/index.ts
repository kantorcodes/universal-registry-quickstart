import { RegistryBrokerClient, ProfileType, AIAgentType, AIAgentCapability, HCS11Profile } from '@hashgraphonline/standards-sdk';
import dotenv from 'dotenv';

dotenv.config();

// Initialize the client
// connect to the live Hashgraph Online Registry Broker
const client = new RegistryBrokerClient({
  baseUrl: 'https://hol.org/registry/api/v1',
  // apiKey: process.env.HOL_API_KEY // Optional for read-only, required for some writes
});

async function main() {
  console.log('🚀 Universal Agentic Registry Quickstart\n');

  try {
    // 1. Search for Agents
    await searchForAgents();

    // 2. Register a New Agent (if API Key provided)
    if (process.env.HOL_API_KEY) {
      await registerNewAgent();
    } else {
      console.log('\nℹ️  Skipping registration demo (add HOL_API_KEY to .env to enable)');
      console.log('   You can get an API key at https://hol.org/developers');
    }

  } catch (error) {
    console.error('Error running quickstart:', error);
  }
}

async function searchForAgents() {
  console.log('🔍 Searching for available agents...');
  const searchResult = await client.search({
    q: 'assistant',
    limit: 5,
    sortBy: 'most-recent'
  });

  console.log(`Found ${searchResult.total} agents matching "assistant". Here are the top ${searchResult.hits.length}:`);
  searchResult.hits.forEach(agent => {
    console.log(`  - ${agent.name} (${agent.uaid})`);
    if(agent.trustScore) console.log(`    Trust Score: ${agent.trustScore}`);
  });
  console.log('');
}

async function registerNewAgent() {
  console.log('📝 Registering a new AI Agent...');

  const myAgentProfile: HCS11Profile = {
    version: '1.0',
    type: ProfileType.AI_AGENT,
    display_name: "Quickstart Assistant",
    alias: "quickstart-assistant",
    bio: "An example agent registered via the universal-registry-quickstart.",
    avatarUrl: "https://hol.org/favicon.ico",
    communicationEndpoint: "https://my-agent.com/api/v1/chat",
    communicationProtocol: "http/json",
    // Detailed AI Metadata (HCS-11)
    aiAgent: {
      type: AIAgentType.MANUAL,
      model: "gpt-4-turbo",
      capabilities: [
        AIAgentCapability.TEXT_GENERATION,
        AIAgentCapability.WORKFLOW_AUTOMATION
      ],
      creator: "Universal Registry Quickstart"
    },
    socials: [
      { platform: 'github', handle: 'hashgraphonline' }
    ],
    properties: {
      tags: ['demo', 'quickstart', 'javascript']
    }
  };

  try {
    const result = await client.registerAgent({
      profile: myAgentProfile,
      endpoint: "https://my-agent.com/api/v1/chat", // Primary endpoint
      communicationProtocol: 'a2a', // or 'mcp'
      registry: 'hashgraph-online', // Default public registry
      metadata: {
        provider: 'quickstart-demo'
      }
    });

    console.log(`✅ Registration Successful!`);
    console.log(`   UAID: ${result.uaid}`);
    console.log(`   Status: ${result.status}`);
    
    if (result.additionalRegistries && result.additionalRegistries.length > 0) {
      console.log('   Additional Registries (Cross-Chain/Cross-Protocol):');
      result.additionalRegistries.forEach(reg => {
        console.log(`     - ${reg.registry}: ${reg.status}`);
      });
    }

  } catch (error: any) {
    console.error('Registration failed:', error.message);
    if(error.body) console.error('Details:', JSON.stringify(error.body, null, 2));
  }
}

main();
