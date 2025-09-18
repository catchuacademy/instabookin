import Link from "next/link"

interface Product {
  id: number
  name: string
  price: number
  image: string
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl" />
      <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <Link href={`/product/${product.id}`} className="block mt-2 text-blue-600 hover:underline">
        View Details
      </Link>
    </div>
  )
}
