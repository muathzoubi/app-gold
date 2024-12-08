'use client'

import Image from "next/image"

export function MobilePreview() {
  return (
    <div className="mt-16 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <div className="aspect-square relative">
          <Image
            src="/images/walaa-home-visual-1-ar.webp"
            alt="App Screenshot 1"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="aspect-square relative">
          <Image
            src="/images/walaa-home-visual-2-ar.webp"
            alt="App Screenshot 2"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="aspect-square relative">
          <Image
            src="/images/walaa-home-visual-4-ar.webp"
            alt="App Screenshot 3"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="aspect-square relative">
          <Image
            src="/images/walaa-home-visual-5-ar.webp"
            alt="App Screenshot 4"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
     
    </div>
  )
}

