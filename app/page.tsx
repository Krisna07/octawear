import Hero from "./components/Homepage/Hero";
import Shop from "./components/Homepage/Shop";

export default function Home() {
  return (
    <main className="tablet:w-[80%] laptop:w-[1000px] flex min-h-screen flex-col items-center justify-between bg-gray-400">
      <Hero />
      <Shop />
    </main>
  );
}
