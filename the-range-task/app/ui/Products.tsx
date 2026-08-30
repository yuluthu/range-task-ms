
import Product from "@/app/ui/Product";

export default function Products({sortBy, products}: {sortBy: any, products: any}) {
  const compare = (a: any, b: any) => {
    if (!sortBy) return 0;

    if (sortBy === "name") {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    } else if (sortBy === "was_price") {
      return (a['was_price'] - a.price) - (b['was_price'] - b.price);
    } else {
      return a[sortBy] - b[sortBy];
    }
  }
  console.log(products)
  return (
      <div className="grid grid-cols-4 py-3 gap-4">
        {products && products.sort(compare).filter((product) => !sortBy || product[sortBy]).map((product) => (
          <Product key={product.id} productInfo={product} />
        ))}
      </div>
  )
}