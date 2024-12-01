import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">عن تأميني</h3>
            <p className="text-sm text-gray-400">
              نساعدك في مقارنة عروض التأمين من الشركات الرائدة للعثور على أفضل تغطية بالسعر المناسب.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">الصفحة الرئيسية</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">تأمين السيارات</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">التأمين الصحي</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">تأمين السفر</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">البريد الإلكتروني: info@tameeni.com</li>
              <li className="text-sm text-gray-400">الهاتف: 920000000</li>
              <li className="text-sm text-gray-400">العنوان: الرياض، المملكة العربية السعودية</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">تابعنا</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© 2024 تأميني. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

