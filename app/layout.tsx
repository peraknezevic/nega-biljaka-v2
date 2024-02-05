import "./globals.css"

import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import { PHProvider } from "./providers"
import dynamic from "next/dynamic"

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
})

export const metadata: Metadata = {
  title: "Nega Biljaka",
  description: "Sve o vašim biljkama",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <PHProvider>
        <body
          className={`${GeistSans.className} bg-pink-50 text-emerald-950 dark:bg-emerald-950 dark:text-zinc-300`}
        >
          <PostHogPageView />
          <div className="mx-auto my-8 max-w-4xl md:py-16">{children}</div>
        </body>
      </PHProvider>
    </html>
  )
}
