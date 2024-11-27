import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Menu } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col" dir="rtl">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-2 py-4 flex justify-between items-center">
          <div className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
          <nav className="hidden lg:flex space-x-4 rtl:space-x-reverse">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">الرئيسية</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">المنتجات</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">من نحن</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">اتصل بنا</a>
          </nav>
          <div className="flex items-center space-x-4 ">
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <Image src="/images/BAN.webp" alt="Search" width={24} height={24} />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Image src="/images/BAN.webp" alt="Cart" width={24} height={24} />
              <span className="sr-only">Cart</span>
            </Button>
            <Image src="/images/logo-1.avif" alt="Logo" width={32} height={40} className="hidden sm:block" />
            <Image src="/images/logo-1.avif" alt="Logo" width={32} height={32} className="sm:hidden" />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-[#556B2F] text-white py-12 lg:py-24">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-right mb-8 lg:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">مصاغات الريشة</h1>
              <p className="text-lg md:text-xl mb-6">اكتشف مجموعتنا الفريدة من المجوهرات</p>
              <Button className="bg-[#c4a661] hover:bg-[#b39451] text-white">تسوق الآن</Button>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <Image 
                src="/images/BAN.webp" 
                alt="Featured Jewelry" 
                width={400} 
                height={400}
                className="rounded-lg shadow-lg mx-auto lg:mx-0 lg:ml-auto"
              />
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">منتجات مميزة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((product) => (
                <Card key={product} className="overflow-hidden">
                  <div className="relative">
                    <Image
                      src={`/images/BAN.webp`}
                      alt={`Product ${product}`}
                      width={300}
                      height={300}
                      className="w-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                      جديد
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-right">قلادة ذهبية</h3>
                    <div className="flex justify-between items-center">
                      <Button className="bg-[#c4a661] hover:bg-[#b39451] text-white text-sm">
                        أضف إلى السلة
                      </Button>
                      <span className="font-bold text-lg">299 ر.س</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#556B2F] text-white py-12 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">اشترك في نشرتنا الإخبارية</h2>
            <p className="mb-6">احصل على آخر الأخبار والعروض الخاصة</p>
            <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني" 
                className="w-full max-w-md"
              />
              <Button type="submit" className="bg-[#c4a661] hover:bg-[#b39451] text-white w-full sm:w-auto">
                اشترك
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">عن الشركة</h3>
              <p className="text-sm">مصاغات الريشة هي شركة رائدة في مجال المجوهرات الفاخرة</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-gray-400">سياسة الخصوصية</a></li>
                <li><a href="#" className="hover:text-gray-400">الشروط والأحكام</a></li>
                <li><a href="#" className="hover:text-gray-400">سياسة الإرجاع</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">اتصل بنا</h3>
              <p className="text-sm">البريد الإلكتروني: info@example.com</p>
              <p className="text-sm">الهاتف: +971 123 456 789</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <a href="#" className="hover:text-gray-400">
                  <Image src="/images/BAN.webp" alt="Facebook" width={24} height={24} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <Image src="/images/BAN.webp" alt="Instagram" width={24} height={24} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <Image src="/images/BAN.webp" alt="Twitter" width={24} height={24} />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

