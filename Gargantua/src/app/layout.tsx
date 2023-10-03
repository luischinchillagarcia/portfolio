import './globals.css'
import { Inter } from 'next/font/google'
import { ProviderWrapper } from '@/components/wrappers/jotaiProviderWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luis Chinchilla-Garcia',
  description: 'This is my portfolio website!',
  icons: {
    icon: '/icon.svg',
  },
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" data-theme="blackHole">
      <ProviderWrapper>
        <body className={inter.className}>
          { children }
        </body>
      </ProviderWrapper>
    </html>
  )
}
