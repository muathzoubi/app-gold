"use client";
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"
import { useState } from "react"
import PaymentForm from "./payment-form";

const paymentMethods = [
  { id: "mastercard", name: "Mastercard", logo: "/payment/mastercard.svg" },
  { id: "visa", name: "Visa", logo: "/payment/visa.svg" },
  { id: "mada", name: "مدى", logo: "/payment/mada.svg" },
]

export function PaymentMethods() {
  const [selected,setSelected]=useState("1")
  const [selectdImage,setSelectedImage]=useState("/payment/visa.svg")
  return (
    <>
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-6 text-center">اختر طريقة الدفع</h2>
      <RadioGroup defaultValue="apple-pay" className="space-y-3">
        {paymentMethods.map((method) => (
          <Card key={method.id} className="overflow-hidden">
            
            <RadioGroupItem
            onClick={(e)=>{setSelected(e.currentTarget.value)
              setSelectedImage(method.logo)
              console.log(selected)}}
              value={method.id}
              id={method.id}
              className={`peer sr-only  `}
            />
            <label
              htmlFor={method.id}
              className="flex items-center justify-between p-4 h-16 w-full cursor-pointer transition-colors hover:bg-gray-50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:border-2"
            >
              <div className="flex items-center justify-between w-full">
                <Image
                  src={method.logo}
                  alt={method.name}
                  width={60}
                  height={40}
                  className="object-contain"
                />
                <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary">
                  <div className="w-3 h-3 rounded-full bg-white hidden peer-data-[state=checked]:block"></div>
                </div>
              </div>
            </label>
          </Card>
        ))}
          <Card>
            {selected!==""?<div className="flex flex-col	justify-around		 m-auto	">            
            <Image src={selectdImage} alt=""   width={60}
                  height={40}
                  className="object-contain m-auto py-2"
            />
            <PaymentForm/>
            </div>
            :null


          }
          </Card>

      </RadioGroup>
    </div>
    </>

  )
}

