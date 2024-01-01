import About from "./components/LandingPage/About/About";
import HeroSection from "./components/LandingPage/Hero/HeroSection";
import SelectedWorkImage from "./components/LandingPage/Works/SelectedWorkImage";
import SelectedWorks from "./components/LandingPage/Works/SelectedWorks";

export default function Home() {
  return (
    <main className="mb-[20vh]">
      <HeroSection />
      <About />
      <SelectedWorkImage />
      <SelectedWorks />
      
    </main>
  )
}