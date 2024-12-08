import { cn } from "@/lib/utils"
import "./globals.css"
import { LiveChatWidget } from "@livechat/widget-react"


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
      <head>
        
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased"      )}>
        
        {children}
        <LiveChatWidget license="18924414" />
      </body>
    </html>
  )
}

