import './App.css'
import HeroSection from './components/HeroSection'
import Header from './components/Header'
import NeedsSection from './components/NeedsSection'
import PackagesSection from './components/PackagesSection'
import HowWorks from './components/HowWorks'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header />
      <HeroSection />
      <NeedsSection/>
      <PackagesSection/>
      <HowWorks/>
      <Footer/>
    </>
  )
}

export default App
