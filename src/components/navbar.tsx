import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold">ShopEase</Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/products" className="hover:text-blue-600">Products</Link>
          <Link href="/cart" className="hover:text-blue-600">Cart</Link>
        </div>
      </div>
    </nav>
  )
}
