import About from "./components/LandingPage/About/About";
import HeroSection from "./components/LandingPage/Hero/HeroSection";
import SelectedWorkImage from "./components/LandingPage/Works/SelectedWorkImage";
import SelectedWorks from "./components/LandingPage/Works/SelectedWorks";
import Scene from "./components/R3F/Scene";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <About />
      <SelectedWorkImage />
      <SelectedWorks />

    </main>
  )
}