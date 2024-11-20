import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaHome, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contatos() {
    return (
        <>
            <Header />
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold text-center my-8 text-gray-800">Contatos</h1>
                <div className="flex flex-col items-center">
                    <p className="text-lg text-gray-600 mb-4">Entre em contato comigo através dos seguintes meios:</p>
                    <ul className="text-gray-700 space-y-4">
                        <li className="flex items-center">
                            <FaEnvelope className="mr-2" /> 
                            <a href="mailto:contato@exemplo.com" className="hover:underline">joaoribeiro-contato@outlook.com</a>
                        </li>
                        <li className="flex items-center">
                            <FaPhoneAlt className="mr-2" /> 
                            <a href="tel:+551112345678" className="hover:underline">(21) 99849-1864</a>
                        </li>
                        <li className="flex items-center">
                            <FaHome className="mr-2" /> 
                            Rua Manoel de Freitas, 17615, Rio de Janeiro - RJ
                        </li>
                        <li className="flex items-center">
                            <FaWhatsapp className="mr-2" /> 
                            <a href="https://wa.me/5521998491864" className="hover:underline">WhatsApp</a>
                        </li>
                        <li className="flex items-center">
                            <FaLinkedin className="mr-2" /> 
                            <a href="https://www.linkedin.com/in/jbrr-dev/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                        </li>
                        <li className="flex items-center">
                            <FaGithub className="mr-2" /> 
                            <a href="https://github.com/Jbrr2021" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contatos;

