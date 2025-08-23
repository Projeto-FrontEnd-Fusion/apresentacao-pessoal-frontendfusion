import { Header } from "./assets/components/Header";
import { Sobre } from "./assets/components/Sobre";
import { Habilidades } from "./assets/components/Habilidades";
import { Projetos } from "./assets/components/Projetos";

export const App = () => {
  return(
    <main className="w-screen h-full bg-linear-to-br from-darkblue to-gradient font-mono tracking-tighter p-7 pt-10 flex flex-col gap-6 lg:flex-row lg:px-40 lg:gap-60 lg:pt-30 lg:pl-60">
      <Header />
      <div className="lg:flex lg:flex-col lg:gap-30 lg:pl-120">
        <Sobre />
        <Habilidades />
        <Projetos />
      </div>
    </main>
  );
}