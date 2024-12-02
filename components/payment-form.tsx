"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function PaymentForm() {
  const router = useRouter()
  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [expiryMonth, setExpiryMonth] = useState("")
  const [expiryYear, setExpiryYear] = useState("")
  const [cvc, setCvc] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ cardNumber, cardName, expiryMonth, expiryYear, cvc })
    alert("تم إرسال الدفعة بنجاح!")
    router.push("/dashboard")
  }

  const isFormValid = cardNumber && cardName && expiryMonth && expiryYear && cvc

  return (
    <Card className="w-full max-w-md mx-auto rtl">
      <CardHeader>
        <CardTitle>تفاصيل الدفع</CardTitle>
        <CardDescription>يرجى إدخال معلومات الدفع الخاصة بك</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="cardNumber">رقم البطاقة</label>
            <Input
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              className="text-right"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="cardName">الاسم على البطاقة</label>
            <Input
              id="cardName"
              placeholder="محمد أحمد"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              required
              className="text-right"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label htmlFor="expiryMonth">شهر الانتهاء</label>
              <Select value={expiryMonth} onValueChange={setExpiryMonth}>
                <SelectTrigger id="expiryMonth">
                  <SelectValue placeholder="الشهر" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <SelectItem key={month} value={month.toString().padStart(2, "0")}>
                      {month.toString().padStart(2, "0")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="expiryYear">سنة الانتهاء</label>
              <Select value={expiryYear} onValueChange={setExpiryYear}>
                <SelectTrigger id="expiryYear">
                  <SelectValue placeholder="السنة" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="cvc">رمز الأمان</label>
              <Input
                id="cvc"
                placeholder="123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                required
                maxLength={4}
                className="text-right"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={!isFormValid}>
            ادفع الآن
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

