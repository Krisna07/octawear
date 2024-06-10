import Hero from "./Homepage/Hero";
import Shop from "./Homepage/Shop";

export default function Home() {
  return (
    <main className="tablet:w-[80%] laptop:w-[1000px] max-w-full flex min-h-screen flex-col items-center justify-between bg-gray-400 ">
      <Hero />
      <Shop />
    </main>
  );
}
