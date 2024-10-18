import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-8 sm:gap-20">
        // si el padre tiene h-full y / o  w-full el hijo debe especificar su tamaño
        <Hero/>
        <Skills/>
        <Encryption/>
        <Projects/>
      </div> 
    </main>
  );
}
