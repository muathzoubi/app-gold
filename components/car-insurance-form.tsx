import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Plus } from 'lucide-react'

export function CarInsuranceForm() {
  return (
    <>
    <Card className="max-w-2xl mx-auto mt-8">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <div className="shrink-0">
            <Image
              src="/images/affects-icon1.png"
              alt="Mojaz Logo"
              width={60}
              height={60}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-right">معلومات المركبة من موجز</h3>
            <p className="text-gray-600 text-right">خدمة متطورة تقدم المعلومات المتوفرة عن أي س...</p>
          </div>
          <Plus className="h-6 w-6 text-gray-400" />
        </div>
      </CardContent>
    </Card>
    <Card className="max-w-2xl mx-auto mt-8">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <div className="shrink-0">
            <Image
              src="/images/affects-icon3.png"
              alt="Mojaz Logo"
              width={60}
              height={60}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-right">
مكان واحد للتأمين</h3>
            <p className="text-gray-600 text-right">

 عروض شركات التأمين في مكان واحد وشلنا عنك ه...</p>
          </div>
          <Plus className="h-6 w-6 text-gray-400" />
        </div>
      </CardContent>
    </Card>
    </>
  )
}

