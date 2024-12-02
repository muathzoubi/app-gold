import { Layout } from "@/components/layout"
import { PaymentMethods } from "@/components/payment-methods"

export default function PaymentPage() {
  return (
    <Layout>
      <div className="container mx-auto">
        <PaymentMethods />
      </div>
    </Layout>
  )
}

