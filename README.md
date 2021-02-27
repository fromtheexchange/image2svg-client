# image2svg-client

Client (webpage) to communicate with all the image2svg servers.

## Related repositories

- [image2svg-awesome](https://github.com/fromtheexchange/image2svg-awesome)
- [image2svg-client](https://github.com/fromtheexchange/image2svg-client)
- [image2svg-imagetracerjs](https://github.com/fromtheexchange/image2svg-imagetracerjs)
- [image2svg-potrace](https://github.com/fromtheexchange/image2svg-potrace)
- [image2svg-primitive](https://github.com/fromtheexchange/image2svg-primitive)
- [image2svg-kvec](https://github.com/fromtheexchange/image2svg-kvec)

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To install and run this project, you will need:

- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/package/npm)

### Installing

These step by step instructions will help you get a development environment up and running:

```bash
git clone https://github.com/fromtheexchange/image2svg-client
cd image2svg-client
npm install
npm run dev
```

Visit [http://localhost:3000/](http://localhost:3000/) to view the client live.

**IMPORTANT**: You will need to install and run the server repositories if you want to process your images.

## Deployment

### Vercel

Be sure you have created a Vercel account and are signed in.

```bash
vercel --prod
```

Select all the default settings.

## Built with

- [Readme Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) - The Readme template
- [NextJS](https://nextjs.org/) - The React framework
- [TailwindCSS](https://tailwindcss.com/) - The styling framework
- [twin.macro](https://github.com/ben-rogerson/twin.macro) - Tailwind plugin
- [Vercel](https://vercel.com/) - Web hosting

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## License

This project is licensed under the [MIT License](LICENSE.md).

Be aware that design assets like fonts, icons, patterns, etc. may not fall under this license.

# NextJS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
