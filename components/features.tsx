import { Shield, Clock, ThumbsUp, Users } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "تغطية شاملة",
      description: "نوفر مجموعة واسعة من خيارات التأمين لتلبية احتياجاتك"
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: "مقارنة سريعة",
      description: "احصل على عروض أسعار في دقائق من شركات التأمين الرائدة"
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-blue-600" />,
      title: "أسعار تنافسية",
      description: "نضمن لك الحصول على أفضل الأسعار المتاحة في السوق"
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "دعم العملاء",
      description: "فريق خبراء متخصص لمساعدتك في اختيار التأمين المناسب"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">لماذا تختار تأميني؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 inline-block">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

