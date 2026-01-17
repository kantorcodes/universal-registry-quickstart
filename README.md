# Universal Registry Quickstart

| ![](https://github.com/hashgraph-online/standards-sdk/raw/main/Hashgraph-Online.png) | **The universal discovery layer for AI agents and MCP servers.** One API to search, verify, and connect with any agent — Web2 or Web3, any protocol, anywhere.<br><br>[📚 SDK Documentation](https://hol.org/docs/libraries/standards-sdk/)<br>[📖 API Documentation](https://hol.org/docs/registry-broker/) |
| :-------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

[![npm version](https://img.shields.io/npm/v/@hashgraphonline/standards-sdk?style=for-the-badge&logo=npm&logoColor=white&label=standards-sdk)](https://www.npmjs.com/package/@hashgraphonline/standards-sdk)
[![Run in Postman](https://img.shields.io/badge/Run_in-Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://app.getpostman.com/run-collection/51598040-f1ef77fd-ae05-4edb-8663-efa52b0d1e99?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D51598040-f1ef77fd-ae05-4edb-8663-efa52b0d1e99%26entityType%3Dcollection%26workspaceId%3Dfb06c3a9-4aab-4418-8435-cf73197beb57)
[![Import in Insomnia](https://img.shields.io/badge/Import_in-Insomnia-4000BF?style=for-the-badge&logo=insomnia&logoColor=white)](https://insomnia.rest/run/?label=Universal%20Agentic%20Registry&uri=https%3A%2F%2Fhol.org%2Fregistry%2Fapi%2Fv1%2Fopenapi.json)
[![OpenAPI Spec](https://img.shields.io/badge/OpenAPI-3.1.0-6BA539?style=for-the-badge&logo=openapiinitiative&logoColor=white)](https://hol.org/registry/api/v1/openapi.json)

[![Open in CodeSandbox](https://img.shields.io/badge/Open_in-CodeSandbox-blue?style=for-the-badge&logo=codesandbox&logoColor=white)](https://codesandbox.io/s/github/hashgraph-online/universal-registry-quickstart)
[![Open in StackBlitz](https://img.shields.io/badge/Open_in-StackBlitz-1269D3?style=for-the-badge&logo=stackblitz&logoColor=white)](https://stackblitz.com/github/hashgraph-online/universal-registry-quickstart)
[![Open in Replit](https://img.shields.io/badge/Open_in-Replit-667881?style=for-the-badge&logo=replit&logoColor=white)](https://replit.com/github/hashgraph-online/universal-registry-quickstart)
[![Open in Gitpod](https://img.shields.io/badge/Open_in-Gitpod-FFAE33?style=for-the-badge&logo=gitpod&logoColor=white)](https://gitpod.io/#https://github.com/hashgraph-online/universal-registry-quickstart)

A simple Node.js example demonstrating how to interact with the [Universal Agentic Registry](https://hol.org/registry) — the discovery layer for **46,000+ AI agents** across Web2 and Web3.

## What is the Universal Registry?

The [Universal Agentic Registry](https://hol.org/docs/registry-broker/) is the connectivity layer for the autonomous web. One standards-compliant API to access agents from:

| Protocol | Description |
|----------|-------------|
| **Virtuals** | Tokenized AI agents |
| **A2A** | Google's Agent-to-Agent protocol |
| **MCP** | Anthropic's Model Context Protocol |
| **ERC-8004** | On-chain agent verification |
| **x402 Bazaar** | Agent payment rails |
| **OpenConvAI** | Conversational AI standard |
| **XMTP** | Decentralized messaging |
| **ANS** | Agent Name Service |

## Quick Start

This project uses the [`@hashgraphonline/standards-sdk`](https://www.npmjs.com/package/@hashgraphonline/standards-sdk) to:
- Search for AI agents across all protocols
- Resolve agent details using UAIDs (Universal Agent Identifiers)
- Prepare agent profiles for registration

### Prerequisites

- Node.js >= 18
- npm or pnpm

### Installation

```bash
# Clone and install
git clone https://github.com/hashgraph-online/universal-registry-quickstart.git
cd universal-registry-quickstart
npm install
```

### Usage

```bash
npm start
```

You should see output demonstrating a live search of the Universal Registry and resolution of agent details.

## Code Overview

```typescript
import { RegistryBrokerClient } from "@hashgraphonline/standards-sdk";

const client = new RegistryBrokerClient();

// Search for AI agents across all protocols
const results = await client.search({ q: "autonomous finance" });

// Resolve any agent by UAID
const agent = await client.resolveUaid("uaid://virtuals/agent-123");
```

### Key Methods

| Method | Description |
|--------|-------------|
| `client.search({ q: '...' })` | Find agents across all protocols |
| `client.resolveUaid(uaid)` | Get full verified agent profile |
| `client.getAgentDetails(uaid)` | Fetch agent metadata and capabilities |

## API & Documentation

| Resource | Link |
|----------|------|
| **Live Registry** | [hol.org/registry](https://hol.org/registry) |
| **API Documentation** | [hol.org/docs/registry-broker](https://hol.org/docs/registry-broker/) |
| **SDK Reference** | [hol.org/docs/libraries/standards-sdk](https://hol.org/docs/libraries/standards-sdk/) |
| **Postman Collection** | [Run in Postman](https://app.getpostman.com/run-collection/51598040-f1ef77fd-ae05-4edb-8663-efa52b0d1e99) |
| **Insomnia** | [Import OpenAPI](https://insomnia.rest/run/?label=Universal%20Agentic%20Registry&uri=https%3A%2F%2Fhol.org%2Fregistry%2Fapi%2Fv1%2Fopenapi.json) |
| **OpenAPI Spec** | [openapi.json](https://hol.org/registry/api/v1/openapi.json) |
| **npm Package** | [@hashgraphonline/standards-sdk](https://www.npmjs.com/package/@hashgraphonline/standards-sdk) |

## API Clients

Use your favorite API client to explore the Registry API:

### Postman
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/51598040-f1ef77fd-ae05-4edb-8663-efa52b0d1e99?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D51598040-f1ef77fd-ae05-4edb-8663-efa52b0d1e99%26entityType%3Dcollection%26workspaceId%3Dfb06c3a9-4aab-4418-8435-cf73197beb57)

### Insomnia
Import the OpenAPI spec directly:
1. Open Insomnia → **File** → **Import**
2. Select **From URL**
3. Paste: `https://hol.org/registry/api/v1/openapi.json`
4. Click **Import**

Or use the button: [![Import in Insomnia](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Universal%20Agentic%20Registry&uri=https%3A%2F%2Fhol.org%2Fregistry%2Fapi%2Fv1%2Fopenapi.json)

### cURL
```bash
# Search for agents
curl "https://hol.org/registry/api/v1/search?q=autonomous+finance"

# Resolve a UAID
curl "https://hol.org/registry/api/v1/resolve/uaid://virtuals/aixbt"
```

### HTTPie
```bash
# Search for agents
http GET "https://hol.org/registry/api/v1/search" q=="autonomous finance"

# Resolve a UAID  
http GET "https://hol.org/registry/api/v1/resolve/uaid://virtuals/aixbt"
```

## Related Repositories

- [`standards-sdk`](https://github.com/hashgraph-online/standards-sdk) - The core SDK powering the registry client
- [`hashinal-wc`](https://github.com/hashgraph-online/hashinal-wc) - WalletConnect integration

## 🏆 Score HOL Points

Contribute to this repository and score [HOL Points](https://hol.org/points)! 

- 🔧 **Fix bugs** or improve documentation
- ✨ **Add new features** or examples
- 📝 **Submit pull requests** to score points

Points can be used across the HOL ecosystem. [Learn more →](https://hol.org/points)

## License

Apache-2.0
