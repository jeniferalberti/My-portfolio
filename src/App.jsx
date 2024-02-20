import './App.scss'
import '../src/assets/sass/home.scss'
import Header from './components/Header'
import SobreMim from './components/SobreMim'
import Informacoes from './components/Informacoes'
import RedesSociais from './components/RedesSociais'

export default function App() {
  return(
    <div className="container">
      <Header/>
      <SobreMim/>
      <Informacoes/>
      <RedesSociais/>
    </div>
  )
}