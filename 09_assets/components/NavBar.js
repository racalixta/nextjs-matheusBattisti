import Link from "next/link";
import styles from '../styles/Navbar.module.css'

export default function NavBar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/">
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link href="/products">
          <span>Produtos</span>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <span>Sobre</span>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <span>Contato</span>
        </Link>
      </li>
    </ul>
  )
}