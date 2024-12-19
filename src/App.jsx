import HeroSection from "./components/HeroSection"
import KeyFeatures from "./components/KeyFeatures"
import Navbar from "./components/Navbar"
import PricingPlans from "./components/PricingPlans"
import Work from "./components/Work"

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Work />
      <KeyFeatures />
      <PricingPlans />
    </>
  )
}

export default App