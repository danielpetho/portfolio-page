import { Loading } from "./components/SmallAnim";

export default function Home() {
  return (
    <main className="flex font-bold text-blue items-center justify-center flex-col h-screen text-center text-4xl sm:text-7xl mx-4">
      <Loading />
      <h2>This site is under construction.</h2>
      <h3 className="my-2">Check back soon!</h3>
      
    </main>
  )
}