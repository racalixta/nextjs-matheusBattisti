import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] });
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';


export default function Home() {

  return (
    <>
      <Head>
        <title>Página Principal</title>
        <meta name="keywords" content="Roupas, Calçados, Boné" />
        <meta name='description' content="Encontre as melhores roupas para você." />
      </Head>

      <div>
        <h1 className={styles.title}>Home do Next.js</h1>
        <Image 
          src="/images/city.jpg" 
          width={640} 
          height={961} 
          alt="Cidade"
        />
      </div>
    </>

  )
}
