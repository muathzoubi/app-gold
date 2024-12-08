
import { Hero } from "@/components/hero"
import { InsuranceCategories } from "@/components/insurance-categories"
import { CarInsuranceForm } from "@/components/car-insurance-form"
import { Features } from "@/components/features"
import RootLayout from "@/components/layout"
import { Header } from "@/components/header"
import { MobilePreview } from "@/components/mobile-preview"
import { LiveChatWidget } from "@livechat/widget-react"

export default function HomePage() {
  return (
    <RootLayout>
<Header/>
<div className="sec1 sec2">
      <InsuranceCategories />

      <Hero />
      <CarInsuranceForm />
      <MobilePreview/>
      <Features />
      </div>
      <div className="text-center p-4 text-sm text-gray-600">
        <p>أكثر من 20 شركة تأمين معتمدة - خيارات متعددة - وثيقة تأمين فورية</p>
      </div>
      <LiveChatWidget license="18924414"/>
    </RootLayout>
  )
}

