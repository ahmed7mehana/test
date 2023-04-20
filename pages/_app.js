import Footer from '@/Components/Footer'
import Navba from '@/Components/Navba'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
    <Navba/>
    <Component {...pageProps} />
    <Footer/>
    
    </div>
  )
}
