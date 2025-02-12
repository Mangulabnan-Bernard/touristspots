import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import {ClerkProvider} from '@clerk/nextjs';
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TopNav }from "./_components/topnav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

export const metadata: Metadata = {
  title: "TouristSpots",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "https://www.shutterstock.com/image-vector/pampangaprovince-pampangaphilippines-map-fully-editable-260nw-2044843427.jpg" }],
};  


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
      <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        
         <TopNav />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
