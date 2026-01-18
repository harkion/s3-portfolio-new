// app/layout.tsx
import './globals.css'
import styles from './layout.module.css'
import type { Metadata } from 'next'
import Header from './header' // Import the new component

export const metadata: Metadata = {
  title: 'Fahri Can Genç | Frontend Developer',
  description: 'Portfolio of Fahri Can Genç',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* We replaced the static <header> with our new dynamic <Header /> */}
        <Header />

        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  )
}