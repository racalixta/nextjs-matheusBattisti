import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home</h1>
    </div>
  )
}
