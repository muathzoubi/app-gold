import { Car, Heart, Stethoscope } from 'lucide-react'

export function InsuranceCategories() {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto py-4 px-1" dir='ltr'>
      <div className="text-center p-6 rounded-lg bg-white shadow-sm">
        <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-gray-100">
          <Stethoscope className="h-6 w-6 text-gray-600" />
        </div>
        <p className="mt-3 text-gray-600 text-sm">الأخطاء الطبية</p>
      </div>
      <div className="text-center p-6 rounded-lg bg-white shadow-sm">
        <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-gray-100">
          <Heart className="h-6 w-6 text-gray-600" />
        </div>
        <p className="mt-3 text-gray-600 text-sm">طبي</p>
      </div>
      <div className="text-center p-6 rounded-lg bg-blue-50 shadow-sm border-2 border-blue-200">
        <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
          <Car className="h-6 w-6 text-blue-600" />
        </div>
        <p className="mt-3 text-blue-600 text-sm">سيارات</p>
      </div>
    </div>
  )
}

