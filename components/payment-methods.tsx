import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"

export function PaymentMethods() {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-6 text-center">اختر طريقة الدفع</h2>
      <RadioGroup defaultValue="apple-pay" className="space-y-3">
        {[
          { id: "apple-pay", name: "Apple Pay", logo: "/payment/apple-pay.svg" },
          { id: "mastercard", name: "Mastercard", logo: "/payment/mastercard.svg" },
          { id: "visa", name: "Visa", logo: "/payment/visa.svg" },
          { id: "mada", name: "مدى", logo: "/payment/mada.svg" },
          { id: "sadad", name: "سداد", logo: "/payment/sadad.svg" },
        ].map((method) => (
          <Card key={method.id} className="relative">
            <RadioGroupItem
              value={method.id}
              id={method.id}
              className="peer sr-only"
            />
            <label
              htmlFor={method.id}
              className="flex items-center justify-between p-4 h-16 w-full cursor-pointer rounded-lg border peer-data-[state=checked]:border-primary"
            >
              <Image
                src={method.logo}
                alt={method.name}
                width={60}
                height={40}
                className="object-contain"
              />
            </label>
          </Card>
        ))}
      </RadioGroup>
    </div>
  )
}

