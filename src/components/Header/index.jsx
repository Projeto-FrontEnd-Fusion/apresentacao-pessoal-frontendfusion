import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full bg-gray-800 p-4 flex items-center justify-between">
            {/* Logo que desaparece em telas pequenas */}
            <Link to="/" className="hidden md:block text-white text-2xl font-bold">
                João Batista.dev
            </Link>

            {/* Botão de hambúrguer para mobile */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
                    {isOpen ? (
                        <span>&times;</span>  // Ícone de "X" para fechar
                    ) : (
                        <span>&#9776;</span>  // Ícone de hambúrguer
                    )}
                </button>
            </div>

            {/* Menu de navegação - escondido em mobile */}
            <nav className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4`}>
                <Link to="/" className="block text-white hover:text-gray-400">Home</Link>
                <Link to="/sobre" className="block text-white hover:text-gray-400">Sobre</Link>
                <Link to="/projetos" className="block text-white hover:text-gray-400">Projetos</Link>
                <Link to="/contatos" className="block text-white hover:text-gray-400">Contatos</Link>
            </nav>
        </header>
    );
}

export default Header;

