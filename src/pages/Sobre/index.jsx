import styles from './Sobre.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Sobre() {
    return (
        <>
            <Header />
            <div className="container mx-auto p-6 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-4">Sobre Mim</h1>
                <img
                    src="/fotoPerfil.jpeg"
                    alt="Minha Foto"
                    className="w-48 h-48 rounded-full border-4 border-gray-300 shadow-lg transform transition duration-500 hover:scale-110"
                />
                <p className="mt-4 text-lg text-center text-gray-700 animate-fade-in">
                    Olá! Sou um desenvolvedor apaixonado por criar aplicações incríveis e resolver problemas de forma criativa. Estou sempre aprendendo e buscando novas experiências!
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Minhas Habilidades</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                        <img
                            src="/icons8-reagir.svg" 
                            alt="React"
                            className="w-16 h-16 transform transition duration-500 hover:scale-110"
                        />
                        <span className="mt-2 text-center">React</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="/tailwind-css.svg" 
                            alt="Tailwind CSS"
                            className="w-16 h-16 transform transition duration-500 hover:scale-110"
                        />
                        <span className="mt-2 text-center">Tailwind CSS</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="/vite.svg" 
                            alt="Vite"
                            className="w-16 h-16 transform transition duration-500 hover:scale-110"
                        />
                        <span className="mt-2 text-center">Vite</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="/icons8-javascript.svg"
                            alt="JavaScript"
                            className="w-16 h-16 transform transition duration-500 hover:scale-110"
                        />
                        <span className="mt-2 text-center">JavaScript</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Sobre;

