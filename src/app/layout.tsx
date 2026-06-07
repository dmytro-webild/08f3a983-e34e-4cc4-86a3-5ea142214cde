import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'InnovateGrowth Agency - B2B Content & Ads Experts',
  description: 'Partner with InnovateGrowth Agency for high-converting B2B content marketing and advanced digital advertising strategies. Drive leads, engagement, and measurable ROI.',
  keywords: ["B2B marketing agency, content marketing, digital advertising, paid ads, lead generation, B2B strategy, LinkedIn ads, Google ads, marketing ROI"],
  openGraph: {
    "title": "InnovateGrowth Agency - B2B Content & Ads Experts",
    "description": "Partner with InnovateGrowth Agency for high-converting B2B content marketing and advanced digital advertising strategies. Drive leads, engagement, and measurable ROI.",
    "url": "https://www.innovategrowth.com",
    "siteName": "InnovateGrowth Agency",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/laptop-table-displaying-greenscreen_482257-123662.jpg",
        "alt": "B2B Marketing Team collaborating on content and ads strategy"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "InnovateGrowth Agency - B2B Content & Ads Experts",
    "description": "Partner with InnovateGrowth Agency for high-converting B2B content marketing and advanced digital advertising strategies. Drive leads, engagement, and measurable ROI.",
    "images": [
      "http://img.b2bpic.net/free-photo/laptop-table-displaying-greenscreen_482257-123662.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
