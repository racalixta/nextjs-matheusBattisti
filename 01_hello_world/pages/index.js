import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Hello World Next.js</h1>
      </div>
    </main>

  )
}
