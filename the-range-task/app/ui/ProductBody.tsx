"use client"
import Sorts from "@/app/ui/Sorts";
import Products from "@/app/ui/Products";
import Product from "@/app/ui/Product";
import {useState, use} from "react";

export default function ProductBody({products}) {

  const [sortBy, setSortBy] = useState(false);

  const onClick = (key: any) => {
    setSortBy(key);
  }


  return (<div>
    <Sorts onClick={onClick} />
    <Products products={use(products)} sortBy={sortBy} />
  </div>
  )
}