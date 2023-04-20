import Navba from '@/components/navpar'
import '../styles/globals.css'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <div>
    <Navba/>
    <Component {...pageProps} />
    <Footer/>
    
    </div>
  )
}
