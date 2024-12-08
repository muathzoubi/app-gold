'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Info } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useState } from "react"
import Link from "next/link"

export function Hero() {
  const [clicked, setClicked] = useState(true)
  const [isloading, setIsloading] = useState(false)
  return (
    <Card className="max-w-2xl mx-auto mt-8">
      <div className="text-center mb-6 p-4">
        <h2 className="text-xl text-gray-700">اشتر تأمين ضد الغير/شامل في دقائق</h2>
      </div>

      {clicked ?
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-gray-600">رقم الهوية</label>
              <Info className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              dir="rtl"
              className="text-right"
              placeholder="رقم الهوية الوطنية أو الإقامة أو الشركة"
            />
            <Button className="w-full bg-[#82b440] hover:bg-[#72a030] text-lg" onClick={

              () => {
                setIsloading(true)
                setTimeout(() => {
                  setClicked(false)
                }, 3000)
              }}>
              {
                isloading ? ' الرجاء الانتظار ...' : ' اشتر الآن'
              }
            </Button>

          </div>

        </CardContent>
        :
        <CardContent>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name">الاسم الكامل</label>
              <Input id="name" placeholder="أدخل اسمك الكامل" className="text-right" />
            </div>
            <div className="space-y-2">
              <label htmlFor="id-number">رقم الهوية</label>
              <Input id="id-number" placeholder="أدخل رقم الهوية" className="text-right" />
            </div>
            <div className="space-y-2">
              <label htmlFor="birth-date">تاريخ الميلاد</label>
              <Input id="birth-date" type="date" className="text-right" />
            </div>
            <div className="space-y-2">
              <label htmlFor="gender">نوع التامين</label>
              <Select>
                <SelectTrigger id="gender" className="text-right">
                  <SelectValue placeholder="اختر نوع التأمين" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">ضد الغير</SelectItem>
                  <SelectItem value="female">شامل</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="phone">رقم السيارة</label>
              <Input type="text" id="phone" placeholder="أدخل رقم السيارة" className="text-right" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email">الرقم التسلسلي</label>
              <Input id="email" type="number" placeholder="أدخل الرقم التسلسلي" className="text-right" />
            </div>
            <Link href="/compare">
            <Button className="w-full bg-[#82b440] hover:bg-[#72a030] text-lg">
            
              إرسال المعلومات
            </Button>
            </Link>
          </CardContent>:
        </CardContent>
      }

    </Card>
  )
}

