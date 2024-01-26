import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import "./globals.css"

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
      <body
        className={`${GeistSans.className} bg-pink-50 text-emerald-950 dark:bg-emerald-950 dark:text-zinc-300`}
      >
        <div className="mx-auto my-8 max-w-4xl md:py-16">{children}</div>
      </body>
    </html>
  )
}
