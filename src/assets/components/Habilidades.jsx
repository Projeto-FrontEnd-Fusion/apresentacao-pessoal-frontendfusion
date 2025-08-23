import { Habilidade } from "./Habilidade";
import { Title } from "./Title";
import jsLogo from '../../assets/images/javascript-icon.svg';
import reactLogo from '../../assets/images/react-icon.svg';
import tailwindLogo from '../../assets/images/tailwind-css-icon.svg';
import gitLogo from '../../assets/images/git-icon.svg';
import htmlLogo from '../../assets/images/html-icon.svg';
import cssLogo from '../../assets/images/css-icon.svg';

export const Habilidades = () => {
  return(
    <section id="habilidades" className="flex flex-col gap-15 mt-10 lg:w-5/6">
      <Title
        label="Habilidades"
      />

      <div className="grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-3">
        <Habilidade 
          src={htmlLogo}
          alt="html logo"
          label="HTML"
        />
        <Habilidade 
          src={cssLogo}
          alt="css logo"
          label="CSS"
        />
        <Habilidade 
          src={jsLogo}
          alt="javascript logo"
          label="JavaScript"
        />
        <Habilidade 
          src={tailwindLogo}
          alt="tailwind logo"
          label="Tailwind"
        />
        <Habilidade 
          src={reactLogo}
          alt="react logo"
          label="ReactJs"
        />
        <Habilidade 
          src={gitLogo}
          alt="git logo"
          label="Git"
        />
      </div>
    </section>
  );
}