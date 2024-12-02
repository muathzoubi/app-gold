"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown, Clock, Shield, Car, Wrench } from 'lucide-react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface InsuranceQuote {
  provider: string
  logo: string
  price: number
  discount: number
  benefits: string[]
  additionalCoverage: {
    icon: React.ReactNode
    text: string
  }[]
}

export function InsuranceQuote() {
  const [isOpen, setIsOpen] = useState(false)
  
  const mockQuote: InsuranceQuote = {
    provider: "الراجحي تكافل",
    logo: "/insurance/rajhi.svg",
    price: 2983.99,
    discount: 288.00,
    benefits: ["تغطي إصلاح"],
    additionalCoverage: [
      { icon: <Shield className="h-5 w-5" />, text: "التأمين يشمل (مجاناً)" },
      { icon: <Car className="h-5 w-5" />, text: "سيارة بديلة" },
      { icon: <Wrench className="h-5 w-5" />, text: "المساعدة على الطريق" }
    ]
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">1</div>
            <span>هاتف</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">2</div>
            <span>العرض</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">3</div>
            <span>المركبة</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">4</div>
            <span>الدفع</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-blue-600">
          <Clock className="h-5 w-5" />
          <span>سينقضي وقت التسعيرة خلال 4 ساعات و45 دقيقة و30 ثانية</span>
        </div>
      </div>

      <Card className="mb-4">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-24 bg-gray-100 rounded flex items-center justify-center">
                  {/* Provider logo would go here */}
                  <span className="text-sm font-medium">{mockQuote.provider}</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{mockQuote.benefits[0]}</span>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500">خصومات التعريف</div>
                <div className="text-lg font-bold">{mockQuote.price} ر.س</div>
                <div className="text-sm text-green-500">وفر {mockQuote.discount} ر.س (% 10)</div>
              </div>
            </div>
            <CollapsibleTrigger className="flex items-center gap-2 mt-4 text-primary">
              <span>تغطيات إضافية</span>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <div className="p-4 border-t">
              <div className="grid grid-cols-3 gap-4">
                {mockQuote.additionalCoverage.map((coverage, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {coverage.icon}
                    <span className="text-sm">{coverage.text}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4">اختيار</Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </div>
  )
}

