import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  title: {
    default: "Saddle Mountain RV Park | Tonopah, AZ",
    template: "%s | Saddle Mountain RV Park",
  },
  description:
    "Saddle Mountain RV Park in Tonopah, Arizona offers affordable long-term and short-term RV sites with full hookups, beautiful desert views, and a welcoming community.",
  metadataBase: new URL("https://www.saddlemountainrv.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Saddle Mountain RV Park",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
