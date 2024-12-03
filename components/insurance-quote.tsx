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
import Image from "next/image"
import Link from "next/link"

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
  
  
  const mockQuote:InsuranceQuote[] = [
    {
      provider: "شركة تكافل الراجحي للتأمين",
      logo: "/images/art.webp",
      price: 1000.00,
      discount: 50.00,
      benefits: ["تغطية شاملة للتأمين الصحي"],
      additionalCoverage: [
        { icon: <Shield className="h-5 w-5" />, text: "التأمين ضد الحوادث" },
        { icon: <Car className="h-5 w-5" />, text: "سيارة بديلة" },
        { icon: <Wrench className="h-5 w-5" />, text: "المساعدة على الطريق" }
      ]
    }, {
      provider: "شركة سلامة للتأمين التعاوني",
      logo: "images/salama.png",
      price: 1000.00,
      discount: 50.00,
      benefits: ["تغطية شاملة للتأمين الصحي"],
      additionalCoverage: [
        { icon: <Shield className="h-5 w-5" />, text: "التأمين ضد الحوادث" },
        { icon: <Car className="h-5 w-5" />, text: "سيارة بديلة" },
        { icon: <Wrench className="h-5 w-5" />, text: "المساعدة على الطريق" }
      ]
    }, {
      provider: "شركة الجزيرة تكافل تعاوني",
      logo: "/images/ajt.webp",
      price: 1000.00,
      discount: 50.00,
      benefits: ["تغطية شاملة للتأمين الصحي"],
      additionalCoverage: [
        { icon: <Shield className="h-5 w-5" />, text: "التأمين ضد الحوادث" },
        { icon: <Car className="h-5 w-5" />, text: "سيارة بديلة" },
        { icon: <Wrench className="h-5 w-5" />, text: "المساعدة على الطريق" }
      ]
    },
    {
      provider: "شركة إتحاد الخليج الاهلية للتأمين التعاوني",
      logo: "/images/gulfunion.png",
      price: 1000.00,
      discount: 50.00,
      benefits: ["تغطية شاملة للتأمين الصحي"],
      additionalCoverage: [
        { icon: <Shield className="h-5 w-5" />, text: "التأمين ضد الحوادث" },
        { icon: <Car className="h-5 w-5" />, text: "سيارة بديلة" },
        { icon: <Wrench className="h-5 w-5" />, text: "المساعدة على الطريق" }
      ]
    },
    {
      provider: "شركة ملاذ للتأمين وإعادة التأمين التعاوني",
      logo: "/images/malath.png",
      price: 1200.00,
      discount: 100.00,
      benefits: ["تغطية الحوادث", "تأمين شامل"],
      additionalCoverage: [
        { icon: <Shield className="h-5 w-5" />, text: "الحماية ضد السرقة" },
        { icon: <Car className="h-5 w-5" />, text: "تغطية إصلاح السيارة" },
        { icon: <Wrench className="h-5 w-5" />, text: "خدمة إصلاح الطوارئ" }
      ]
    },
    {
      provider: "شركة التأمين العربية التعاونية",
      logo: "/images/aicc.png",
      price: 1100.00,
      discount: 75.00,
      benefits: ["تغطية ضد السرقة", "تأمين ضد الحوادث الشخصية"],
      additionalCoverage: [
        { icon: <Shield className="h-5 w-5" />, text: "التأمين يشمل (مجاناً)" },
        { icon: <Car className="h-5 w-5" />, text: "خدمة استبدال السيارة" },
        { icon: <Wrench className="h-5 w-5" />, text: "إصلاح على الطريق" }
      ]
    },
    {
      provider: "شركة ولاء للتأمين التعاوني",
      logo: "/images/walaa.png",
      price: 1500.00,
      discount: 150.00,
      benefits: ["تغطية طبية شاملة", "تأمين ضد الحوادث"],
      additionalCoverage: [
        { icon: <Shield className="h-5 w-5" />, text: "التأمين ضد الأضرار الطبيعية" },
        { icon: <Car className="h-5 w-5" />, text: "مساعدة الطريق" },
        { icon: <Wrench className="h-5 w-5" />, text: "إصلاح الحوادث" }
      ]
    },
    {
      provider: "الدرع العربي للتأمين",
      logo: "/images/der3.png",
      price: 1300.00,
      discount: 120.00,
      benefits: ["تغطية صحية", "تأمين شامل ضد الحوادث"],
      additionalCoverage: [
        { icon: <Shield className="h-5 w-5" />, text: "الحماية ضد الحوادث الشخصية" },
        { icon: <Car className="h-5 w-5" />, text: "تغطية السيارة في الحوادث" },
        { icon: <Wrench className="h-5 w-5" />, text: "خدمة المساعدة على الطريق" }
      ]
    },
    {
      provider: "شركة المجموعة المتحدة للتأمين التعاوني",
      logo: "/images/acig.png",
      price: 1400.00,
      discount: 200.00,
      benefits: ["تغطية تكاليف العلاج", "تأمين ضد السرقة"],
      additionalCoverage: [
        { icon: <Shield className="h-5 w-5" />, text: "التأمين ضد الأضرار" },
        { icon: <Car className="h-5 w-5" />, text: "سيارة بديلة" },
        { icon: <Wrench className="h-5 w-5" />, text: "المساعدة على الطريق" }
      ]
    },
    {
      provider: "شركة سلامة للتأمين التعاوني",
      logo: "/images/salama.png",
      price: 1350.00,
      discount: 80.00,
      benefits: ["تغطية حوادث شاملة"],
      additionalCoverage: [
        { icon: <Shield className="h-5 w-5" />, text: "تأمين ضد الأضرار" },
        { icon: <Car className="h-5 w-5" />, text: "مساعدة السيارة في الطريق" },
        { icon: <Wrench className="h-5 w-5" />, text: "إصلاح السيارة" }
      ]
    },
    // Add more partners in similar structure...
  ]
  
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 space-y-4 md:space-y-0">
        <div className="flex flex-wrap items-center gap-4">
          {[
            { number: 1, text: "العرض" },
            { number: 2, text: "المركبة" },
            { number: 3, text: "الدفع" },
          ].map((step, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                {step.number}
              </div>
              <span className="text-sm">{step.text}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-blue-600 text-sm">
          <Clock className="h-5 w-5 flex-shrink-0" />
          <span>سينقضي وقت التسعيرة خلال 4 ساعات و45 دقيقة و30 ثانية</span>
        </div>
      </div>
{mockQuote.map((item,index)=>
      <Card className="mb-4" key={index}>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center gap-4">
                <div className="h-12 w-24 bg-gray-100 rounded flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.provider}
                    width={80}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{item.provider}</span>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{item.benefits[0]}</span>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500">خصومات التعريف</div>
                <div className="text-lg font-bold">{item.price} ر.س</div>
                <div className="text-sm text-green-500">وفر {item.discount} ر.س (% 10)</div>
              </div>
            </div>
            <CollapsibleTrigger className="flex items-center gap-2 mt-4 text-primary">
              <span>تغطيات إضافية</span>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <div className="p-4 border-t">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {item.additionalCoverage.map((coverage, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {coverage.icon}
                    <span className="text-sm">{coverage.text}</span>
                  </div>
                ))}
              </div>
              <Link href="/payment" className="w-full mt-4">              <Button>  اختيار</Button></Link>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>
      )}
    </div>
  )
}

