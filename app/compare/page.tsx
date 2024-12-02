import { InsuranceQuote } from "@/components/insurance-quote"
import RootLayout from "@/components/layout"

export default function ComparePage() {
  return (
    <RootLayout>
      <div className="container mx-auto">
        <InsuranceQuote />
      </div>
    </RootLayout>
  )
}

