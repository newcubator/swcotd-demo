This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Building and running a production container

Run the following commands in the root of this repository:

```bash
docker build -t nextjs-docker .
# and
docker run -p 3000:3000 nextjs-docker
```

The CI pipeline automatically builds a production docker image and pushes it into the gitlab registry. 
These can then be pulled and deployed on the target machine. 
