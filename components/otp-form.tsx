"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface OTPFormProps {
  onVerify: (otp: string) => Promise<void>
}

export default function OTPForm({ onVerify }: OTPFormProps) {
  const [otp, setOtp] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsVerifying(true)
    try {
      await onVerify(otp)
      alert("فشل التحقق. يرجى المحاولة مرة أخرى.")
    } catch (error) {
      console.error("Error verifying OTP:", error)
      alert("فشل التحقق. يرجى المحاولة مرة أخرى.")
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto rtl">
      <CardHeader>
        <CardTitle>التحقق من الدفع</CardTitle>
        <CardDescription>يرجى إدخال رمز التحقق المرسل إلى هاتفك</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="otp">رمز التحقق</label>
              <Input
                id="otp"
                placeholder="000000"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                maxLength={6}
                className="text-center text-2xl tracking-widest"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" >
            {isVerifying ? 'جارٍ التحقق...' : 'تحقق'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

