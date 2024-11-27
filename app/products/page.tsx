import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  price: number
  image: string
}

export default function ProductGrid() {
  const products: Product[] = [
    {
      id: 1,
      name: "Gold Pendant Necklace",
      price: 299,
      image: "/images/BAN.webp"
    },
    {
      id: 2,
      name: "Silver Chain Necklace",
      price: 199,
      image: "/images/BAN.webp"
    },
    {
      id: 3,
      name: "Heart Pendant",
      price: 249,
      image: "/images/BAN.webp"
    },
    {
      id: 4,
      name: "Butterfly Necklace",
      price: 279,
      image: "/images/BAN.webp"
    }
  ]

  return (
    <div className="container mx-auto p-6 bg-[#f9f9f9] rtl">
      {/* Featured Product */}
      <div className="mb-12">
        <Card className="overflow-hidden">
          <Image
            src="/images/1.webp"
            alt="Featured jewelry"
            width={400}
            height={400}
            className="w-full object-cover"
          />
        </Card>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                جديد
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-right">{product.name}</h3>
              <div className="flex justify-between items-center">
                <Button className="bg-[#c4a661] hover:bg-[#b39451] text-white">
                  أضف إلى السلة
                </Button>
                <span className="font-bold text-lg">{product.price} ر.س</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

