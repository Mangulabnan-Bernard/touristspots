import "./src/env.js"; // Ensure environment variables are loaded

/** @type {import("next").NextConfig} */
const coreConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    POSTGRES_URL: process.env.POSTGRES_URL,
  },
  images: {
    remotePatterns: [{ hostname: "mxatayqbwx.ufs.sh" },{ hostname: "utfs.io" }]
     // Allowed image domains
  },
  // env: {
  //   POSTGRES_URL: process.env.POSTGRES_URL,
  // },
};

// Define tourist spots array
// export const touristSpots = [
//   {
//     id: 1,
//     name: "Mount Arayat",
//     description: "A majestic mountain known for its lush greenery and hiking trails.",
//     imageUrl: "https://example.com/images/mount-arayat.jpg", // Replace with a real image URL
//   },
//   {
//     id: 2,
//     name: "San Guillermo Parish Church",
//     description: "A historic church with stunning architecture and religious significance.",
//     imageUrl: "https://example.com/images/san-guillermo-church.jpg", // Replace with a real image URL
//   },
//   {
//     id: 3,
//     name: "Miyamit Falls",
//     description: "A breathtaking waterfall surrounded by nature's beauty.",
//     imageUrl: "https://example.com/images/miyamit-falls.jpg", // Replace with a real image URL
//   },
// ];

import { withSentryConfig } from "@sentry/nextjs";

const config = withSentryConfig(coreConfig,{
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: "bernard-mangulabnan",
  project: "touristspots",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Automatically annotate React components to show their full name in breadcrumbs and session replay
  reactComponentAnnotation: {
    enabled: true,
  },

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
}
);
export default config;
