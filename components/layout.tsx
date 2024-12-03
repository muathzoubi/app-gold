"use client"

import { useEffect } from 'react'
import { ref, onDisconnect, set, serverTimestamp } from 'firebase/database'
import { rtdb } from '@/lib/firebase'
import '@/app/globals.css'
import { Cairo } from 'next/font/google'
const cairo = Cairo({ 
  subsets: ['arabic'],
  display: 'swap',
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const incrementVisitorCount = async () => {
      await fetch('/api/increment-visitor', { method: 'POST' })
    }
    incrementVisitorCount()

    const userStatusRef = ref(rtdb, '/status/' + Math.random().toString(36).substr(2, 9))
    const userStatusOfflineRef = ref(rtdb, '/status/' + Math.random().toString(36).substr(2, 9))

    const isOfflineForDatabase = {
      state: 'offline',
      last_changed: serverTimestamp(),
    }

    const isOnlineForDatabase = {
      state: 'online',
      last_changed: serverTimestamp(),
    }

    onDisconnect(userStatusRef).set(isOfflineForDatabase).then(() => {
      set(userStatusRef, isOnlineForDatabase)
    })

    return () => {
      set(userStatusOfflineRef, isOfflineForDatabase)
    }
  }, [])

  return (
    <html lang="ar" dir="rtl" className={cairo.className}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PPWCC5MB');`
          }}
        />
      </head>
      <body>
        
       <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PPWCC5MB"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  )
}

