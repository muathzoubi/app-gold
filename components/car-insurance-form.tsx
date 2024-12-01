"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FileText, Car, Building, CarFront, Target } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

export function CarInsuranceForm() {
  const [step, setStep] = useState(1)

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold text-center mb-6">
        الموقع الأول لمقارنة أسعار التأمين في المملكة
      </h2>
      <Progress value={step * 25} className="mb-6" />
      <div className="space-y-4">
        {step === 1 && (
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-50 p-2 rounded-full">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <span className="font-medium">السجل التأميني</span>
            </div>
            <Input 
              type="text" 
              placeholder="رقم الهوية الوطنية أو الإقامة أو السجل" 
              className="text-right"
            />
          </Card>
        )}
        
        {step === 2 && (
          <>
            <Card className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-50 p-2 rounded-full">
                  <Car className="h-5 w-5 text-blue-600" />
                </div>
                <span className="font-medium">عمر السائق</span>
              </div>
              <Input 
                type="number" 
                placeholder="أدخل عمر السائق" 
                className="text-right"
              />
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-50 p-2 rounded-full">
                  <Building className="h-5 w-5 text-blue-600" />
                </div>
                <span className="font-medium">مدينة القيادة</span>
              </div>
              <Input 
                type="text" 
                placeholder="اختر المدينة" 
                className="text-right"
              />
            </Card>
          </>
        )}

        {step === 3 && (
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-50 p-2 rounded-full">
                <CarFront className="h-5 w-5 text-blue-600" />
              </div>
              <span className="font-medium">نوع السيارة</span>
            </div>
            <Input 
              type="text" 
              placeholder="اختر نوع السيارة" 
              className="text-right"
            />
          </Card>
        )}

        {step === 4 && (
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-50 p-2 rounded-full">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
              <span className="font-medium">الغرض من استخدام السيارة</span>
            </div>
            <Input 
              type="text" 
              placeholder="حدد الغرض من الاستخدام" 
              className="text-right"
            />
          </Card>
        )}

        <div className="flex justify-between">
          {step > 1 && (
            <Button onClick={prevStep} variant="outline">
              السابق
            </Button>
          )}
          {step < 4 ? (
            <Button onClick={nextStep} className="mr-auto">
              التالي
            </Button>
          ) : (
            <Button className="mr-auto">
              استعلم الآن
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
