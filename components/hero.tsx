import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">قارن وادخر مع تأميني</h1>
        <p className="text-xl mb-8">احصل على أفضل أسعار التأمين من شركات التأمين الرائدة في المملكة</p>
        <Link href={'/compare'}><Button size="lg" variant="secondary">ابدأ المقارنة الآن</Button></Link>
      </div>
    </section>
  )
}

