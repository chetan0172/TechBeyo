import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react" // Import React
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechBeyo - DevOps Excellence",
  description: "Accelerate your DevOps journey with TechBeyo",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      <Script
          src="https://cdn.eqbit.ai/widget.js"
          strategy="afterInteractive"
          data-key="0caefd9cd7a566621b8fe02165af54361c5b7bd7a3a87c97"
      />
      </body>
    </html>
  )
}



import './globals.css'