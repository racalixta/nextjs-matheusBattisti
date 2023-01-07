import Footer from './Footer'
import Navbar from './NavBar'

export default function MainContainer({children}) {

  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  )
}


