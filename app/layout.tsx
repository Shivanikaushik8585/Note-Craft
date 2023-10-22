import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './(marketing)/_components/provider/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NoteCraft',
  description: 'The connected workspace where better,faster work happen.',
  icons:{
    icon:[
      {

        media:"(prefers-color-scheme: light)",
      url:'/.logoN.png',
      href:"/logoN.png"
      },
      {

        media:"(prefers-color-scheme:dark)",
      url:'/.darklogoN.png',
      href:"/darklogoN.png"
      }

      
    ]
    
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
        storageKey='notecraft'>

        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
