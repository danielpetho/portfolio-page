import SelectedWorks from "./components/LandingPage/Works/SelectedWorks";
import { Loading } from "./components/SmallAnim";

export default function Home() {
  return (
    <main className="">
      <section className="flex h-screen font-bold text-blue items-center justify-center flex-col text-center text-4xl sm:text-7xl mx-4">
        <Loading />
      <h2>This site is under construction.</h2>
      <h3 className="my-2">Check back soon!</h3>
      </section>

      <SelectedWorks />
      
    </main>
  )
}