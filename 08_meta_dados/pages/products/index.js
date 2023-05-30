import Link from "next/link";

export default function Products() {
  return (
    <>
      <h1>Página Products</h1>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products/shirt">Shirt</Link>
        </li>
        <li>
          <Link href="/products/pants">Pants</Link>
        </li>
      </ul>
    </>
  )
}