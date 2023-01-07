import { Inter } from '@next/font/google'
import NavBar from '../components/NavBar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home</h1>
    </div>
  )
}
