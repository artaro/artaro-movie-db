import "@/styles/globals.scss";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Providers } from "@/redux/provider";
import Head from "next/head";

export const metadata = {
  title: "Artaro Movie DB",
  description: "A movie platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <UserProvider>
        <Providers>
          <body>{children}</body>
        </Providers>
      </UserProvider>
    </html>
  );
}
