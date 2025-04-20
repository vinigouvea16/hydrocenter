import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const albra = localFont({
  src: './fonts/Albra-400.otf',
  variable: '--font-albra',
})

const bergen = localFont({
  src: './fonts/Bergen-Mono-400.otf',
  variable: '--font-bergen',
})

const tiemposRegular = localFont({
  src: './fonts/Tiempos-Regular.otf',
  variable: '--font-tiempos-regular',
})

const tiemposItalic = localFont({
  src: './fonts/Tiempos-Italic.otf',
  variable: '--font-tiempos-italic',
})

const copernicusBook = localFont({
  src: './fonts/Copernicus-Book.ttf',
  variable: '--font-copernicus-book',
})

const copernicusItalic = localFont({
  src: './fonts/Copernicus-Italic.ttf',
  variable: '--font-copernicus-italic',
})

const copernicusBold = localFont({
  src: './fonts/Copernicus-Bold.ttf',
  variable: '--font-copernicus-bold',
})

const posterman = localFont({
  src: './fonts/Posterman-Regular.otf',
  variable: '--font-posterman',
})

export const metadata: Metadata = {
  title: 'Hydrocenter',
  description: 'Planeta Água, Nutrição Sustentável',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${albra.variable} ${posterman.variable} ${bergen.variable} ${tiemposRegular.variable} ${tiemposItalic.variable} ${copernicusBook.variable} ${copernicusItalic.variable} ${copernicusBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
