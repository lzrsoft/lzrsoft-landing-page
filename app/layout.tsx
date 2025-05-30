import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LZRSoft - Inovação Open Source para Engenharia e Educação",
  description:
    "Desenvolvedora brasileira de soluções open source, criando ferramentas práticas para engenharia e educação.",
  keywords: ["LZRSoft", "open source", "educação", "engenharia", "simulação", "LibrePhy", "tecnologia brasileira"],
  authors: [{ name: "Emanuel Lázaro" }],
  creator: "LZRSoft",
  publisher: "LZRSoft",
  robots: "index, follow",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "LZRSoft - O Futuro da Simulação Educacional",
    description: "Revolucionando a educação tecnológica brasileira através do poder da colaboração open source.",
    url: "https://lzrsoft.com",
    siteName: "LZRSoft",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LZRSoft - Inovação Open Source",
    description: "Desenvolvendo o futuro da educação tecnológica no Brasil",
    creator: "@lzrsoft",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
