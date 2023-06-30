# [Next.js](https://nextjs.org/) v13 (w/ App Router) + [TypeScript](https://www.typescriptlang.org/) + ConnectKit Example

This is a simple example of how to implement ConnectKit's Sign In With Ethereum functionality with the new [Next.js](https://nextjs.org/) App Router in TypeScript.

## Getting started

Install depencencies

```bash
pnpm i
```

Copy `.env.example` to `.env.local` and at a minimum set the walletconnect and session secret vars.

To get a WalletConnect project ID, go to [https://cloud.walletconnect.com/sign-in](https://cloud.walletconnect.com/sign-in)

To generate a random session secret, you can use openssl

```bash
openssl rand -base64 32
```
