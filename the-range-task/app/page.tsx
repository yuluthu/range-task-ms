"use server"
import ProductBody from "@/app/ui/ProductBody";
import { Suspense } from "react";
import Spinner from "@/app/ui/Spinner";

export default async function Home() {

  async function productData() {
    const data = await fetch('http://127.0.0.1:8000/api/data', { cache: 'no-store' })
    return await data.json()
  }

  return (
    <div className="grid items-center justify-center bg-white font-sans">
      <main className="items-center justify-center w-4xl h-full py-32 h-full px-16 sm:items-start">
        <div className="w-full justify-center text-lg decoration-2 p-2">Office Essentials</div>
        <Suspense fallback={<div className="grid place-items-center justify-center"><Spinner/></div>}>
          <ProductBody products={new Promise((resolve) => resolve(productData()))} />
        </Suspense>
      </main>
    </div>
  );
}
 