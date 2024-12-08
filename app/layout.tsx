import { cn } from "@/lib/utils"
import "./globals.css"


export const metadata = {
  title: 'تأميني - مقارنة وشراء التأمين بسهولة',
  description: 'قارن بين عروض التأمين واحصل على أفضل الأسعار من شركات التأمين الرائدة في المملكة العربية السعودية.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: 0,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased"      )}>
        
        {children}
      </body>
    </html>
  )
}

