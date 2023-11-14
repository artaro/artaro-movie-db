import "@/styles/globals.scss";
import { Providers } from "@/redux/provider";

export const metadata = {
  title: "Artaro Movie DB",
  description: "A movie platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
