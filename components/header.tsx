import Link from "next/link"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">تأميني</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-sm font-medium hover:text-blue-600">
              تأمين السيارات
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600">
              التأمين الصحي
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600">
              تأمين السفر
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-600">
              عن الشركة
            </Link>
            <Button>احصل على عرض سعر</Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                <Link href="#" className="text-sm font-medium hover:text-blue-600">
                  تأمين السيارات
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-blue-600">
                  التأمين الصحي
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-blue-600">
                  تأمين السفر
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-blue-600">
                  عن الشركة
                </Link>
                <Button className="w-full">احصل على عرض سعر</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

