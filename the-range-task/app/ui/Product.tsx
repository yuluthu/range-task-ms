"use client"

import Image from 'next/image'

export default function Product({productInfo}: {productInfo: any}) {
  return (
    <div key={productInfo.id} className="col-span-1 cursor-pointer border-1 border-mist-200 text-center" >
      <div className="grid grid-rows-14">
        <Image className="grid row-span-7 self-center p-3 m-auto" src={'/products/'+productInfo.img_id+'.jpg'} alt={productInfo.name} width={200} height={200} />
        <div className="row-span-2 font-bold">{productInfo.name}</div>
        <div className="row-span-1">
          {new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(productInfo.price/100)}
        </div>
        <div className="row-span-1 text-red-500">
          {productInfo['was_price'] ? <span className="">Was <span className="line-through">{new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(productInfo['was_price']/100)}</span></span> : null}
        </div>
        <div className="row-span-1 text-emerald-700">
          {productInfo['reviews'] ? `(${productInfo['reviews']}% review score)` : null}
        </div>
        <div className="row-span-2 p-2">
          <button className="w-full bg-orange-500 text-white py-2 px-4">Add to Basket</button>
        </div>
      </div>
    </div>
  )
}