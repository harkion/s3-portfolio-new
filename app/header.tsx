'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // Import hook to check URL
import { ArrowLeft } from 'lucide-react'
import styles from './layout.module.css'

export default function Header() {
  const [time, setTime] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname() // Get current URL path

  // Check if we are on a project page (but not the main portfolio list)
  const isProjectPage = pathname.includes('/portfolio/') && pathname !== '/portfolio'
  const isAboutPage = pathname.includes('/about') && pathname !== '/about'
  const isContactPage = pathname.includes('/contact') && pathname !== '/contact'

  useEffect(() => {
    setMounted(true)
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    if (userTimeZone && userTimeZone.includes('/')) {
      const city = userTimeZone.split('/')[1].replace(/_/g, ' ')
      setLocation(city)
    } else {
      setLocation('Local')
    }

    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      })
      setTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className={styles.header}>
      {/* Dynamic Left Section: Name OR Back Button */}
      <div className={styles.brand}>
        {isProjectPage ? (
          <Link href="/portfolio" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        ) : (
          "Fahri Can Genç"
        )}
      </div>

      {/* Center Link */}
      <Link href="/" className={styles.navLink}>
        Frontend Developer
      </Link>

      {/* Right Section: Location & Time */}
      <div style={{ minWidth: '150px', textAlign: 'right' }}>
        {mounted ? (
          <>{location} • {time}</>
        ) : (
          <span style={{ opacity: 0 }}>Loading...</span>
        )}
      </div>
    </header>
  )
}