
# Macro API Page 🚀

A **Next.js v14** application that serves as a polished frontend on top of the `macro_api` toolkit—integrating services like YouTube, Spotify, Valorant, DeepSeek, ChatGPT, and more.

---

## Table of Contents

1. [Overview](#overview)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Setup](#setup)  
5. [Development](#development)   
6. [Deployment](#deployment)  
7. [Contributing](#contributing)  
8. [License](#license)

---

## Overview

This is the main page of the macro_api page including the docs.

---

## Features

- 🔗 Multiple API integrations via `macro_api`
- ⚛️ Next.js v14 App Router architecture
- 🧩 TypeScript for strong typing and DX
- 🛠️ Server & client components

---

## Tech Stack

- **Framework**: Next.js v14  
- **Language**: TypeScript  
- **Styling**: (e.g., Tailwind CSS, CSS Modules—choose your preferred)

---

## Setup

1. Clone the repo:
    ```bash
    git clone https://github.com/cptcr/macro_api_page.git
    cd macro_api_page
    ```
2. Install dependencies:
    ```bash
    npm install
    # or yarn install
    ```

---

## Development

```bash
npm run dev
```

Navigate to `http://localhost:3000` to explore.

* Build UI components in `/app/(components)/`
* Refer to `/src/api/` for route-to-client-library wiring

---

## Deployment

Deploy-ready for Vercel, Netlify, or other platforms:

```bash
vercel
# or
netlify deploy
```

Ensure environment variables are configured in your deployment dashboard.

---

## Contributing

Contributions welcome! Suggested workflow:

1. Fork & clone
2. Create feature branch
3. Code, lint, types, test
4. Open PR with description & changes

---

## License

Distributed under **Apache 2.0 License**. See [LICENSE](../macro_api/LICENSE) for details.

---

## Acknowledgments

* Core functionality provided by `macro_api` ([github.com][1])
* Bootstrapped with Next.js v14 App Router
* Integrates diverse APIs: YouTube, Spotify, Valorant, DeepSeek, OpenAI
