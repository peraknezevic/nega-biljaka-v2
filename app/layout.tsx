import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { SessionProvider } from "next-auth/react"

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
    <SessionProvider>
      <html lang="en">
        <body className={GeistSans.className}>{children}</body>
      </html>
    </SessionProvider>
  )
}
