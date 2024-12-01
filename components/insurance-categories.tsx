import { Card } from "@/components/ui/card"
import { Car, User, Building, Shield } from 'lucide-react'

export function InsuranceCategories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-blue-50 p-3 rounded-full">
            <Car className="h-6 w-6 text-blue-600" />
          </div>
          <span className="text-sm font-medium">سيارات</span>
        </div>
      </Card>
      <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-blue-50 p-3 rounded-full">
            <User className="h-6 w-6 text-blue-600" />
          </div>
          <span className="text-sm font-medium">طبي</span>
        </div>
      </Card>
      <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-blue-50 p-3 rounded-full">
            <Building className="h-6 w-6 text-blue-600" />
          </div>
          <span className="text-sm font-medium">الأخطاء الطبية</span>
        </div>
      </Card>
      <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-blue-50 p-3 rounded-full">
            <Shield className="h-6 w-6 text-blue-600" />
          </div>
          <span className="text-sm font-medium">تأمين شامل</span>
        </div>
      </Card>
    </div>
  )
}

