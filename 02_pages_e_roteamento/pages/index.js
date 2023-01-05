import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div >
        <h1>Hello World</h1>
        <p>Apenas uma explicação basica da estrutura de pastas do nextJS</p>
      </div>
    </main>
  )
}
