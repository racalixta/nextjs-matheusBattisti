import Link from "next/link";
import NavBar from "../../components/NavBar";

export default function Products() {
  return (
    <>
      <NavBar />

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