import { Hero } from "@/components/hero"
import { InsuranceCategories } from "@/components/insurance-categories"
import { CarInsuranceForm } from "@/components/car-insurance-form"
import { Features } from "@/components/features"
import RootLayout from "@/components/layout"

export default function HomePage() {
  return (
    <RootLayout>
      <Hero />
      <InsuranceCategories />
      <CarInsuranceForm />
      <Features />
      <div className="text-center p-4 text-sm text-gray-600">
        <p>أكثر من 20 شركة تأمين معتمدة - خيارات متعددة - وثيقة تأمين فورية</p>
      </div>
    </RootLayout>
  )
}

