import { Projeto } from "./Projeto";
import { Title } from "./Title";
import imagemCalcHipoteca from "../../assets/images/mortgage-calculator.png"
import imagemCalcGorjeta from "../../assets/images/tip-calculator.png"
import imagemCalcIdade from "../../assets/images/age-calculator.png"
import imagemGaleria from "../../assets/images/galeria.png"
import imagemFormulario from "../../assets/images/formulario-com-validacao.png"

export const Projetos = () =>{
  return(
    <section id="projetos" className="flex flex-col gap-14 mt-10">
      <Title
        label="Meus Projetos"
      />

        <div className="lg:grid lg:grid-cols-2 lg:w-5/6 lg:gap-x-8 lg:gap-y-12 flex flex-col gap-5">

          <Projeto 
            src={imagemGaleria}
            alt="imagem da galeria"
            title="Galeria de fotos"
            desc="Uma galeria de fotos em React que consome uma API e permite aplicar filtros."
            repo="https://github.com/Leticiafbm/galeria-de-fotos-fusion.git"
            deploy="https://galeria-de-fotos-fusion.vercel.app/"
            techs={["ReactJs", "Tailwind", "Vite"]}
          />
          <Projeto 
            src={imagemFormulario}
            alt="imagem do formulário"
            title="Formulário com validação"
            desc="Formulário de cadastro dinâmico, baseado nos inputs do usuário."
            repo="https://github.com/Leticiafbm/desafio-formulario-com-validacao-frontend"
            deploy="https://desafio-formulario-com-validacao-fr.vercel.app/"
            techs={["ReactJs", "Tailwind", "Vite", "Yup"]}
          />
          <Projeto 
            src={imagemCalcGorjeta}
            alt="imagem da calculadora de gorjeta"
            title="Calculadora de Gorjeta"
            desc="Sistema de cálculo dinâmico com base em inputs do usuário."
            repo="https://github.com/Leticiafbm/Tip-Calculator-React-Tailwind"
            deploy="https://leticiafbm.github.io/Tip-Calculator-React-Tailwind/"
            techs={["ReactJs", "Tailwind", "Vite"]}
          />
          <Projeto 
            src={imagemCalcHipoteca}
            alt="imagem da calculadora de hipoteca"
            title="Calculadora de hipoteca"
            desc="Aplicação com inputs controlados e validação dinâmica."
            repo="https://github.com/Leticiafbm/mortgage-calculator-frontend-mentor"
            deploy="https://leticiafbm.github.io/mortgage-calculator-frontend-mentor/"
            techs={["HTML", "Tailwind", "JavaScript"]}
          />
          <Projeto 
            src={imagemCalcIdade}
            alt="imagem da calculadora de idade"
            title="Calculadora de idade"
            desc="Cálculo dinâmico de idade com parsing e validação em tempo real."
            repo="https://github.com/Leticiafbm/Age-Calculator-Frontend-Mentor"
            deploy="https://leticiafbm.github.io/Age-Calculator-Frontend-Mentor/"
            techs={["HTML", "Tailwind", "JavaScript"]}
          />
        </div>
    </section>
  );
}