import RootLayout from "@/components/layout"
import { PaymentMethods } from "@/components/payment-methods"

export default function PaymentPage() {
  return (
    <RootLayout>
      <div className="container mx-auto px-4 py-8 rtl">
        <h1 className="text-2xl font-bold text-center mb-8">الدفع</h1>
        <PaymentMethods />
      </div>
    </RootLayout>
  )
}

