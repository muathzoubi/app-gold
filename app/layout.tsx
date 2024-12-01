import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import { cn } from "@/lib/utils"
import "./globals.css"

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'تأميني - مقارنة وشراء التأمين بسهولة',
  description: 'قارن بين عروض التأمين واحصل على أفضل الأسعار من شركات التأمين الرائدة في المملكة العربية السعودية.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        ibmPlexSansArabic.className
      )}>
        {children}
      </body>
    </html>
  )
}

