import styles from './Projeto.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Projetos() {
    const projetos = [
        {
            id: 1,
            title: 'Projeto 1',
            imageUrl: '/PP.png', 
            repoUrl: 'https://lnkd.in/dXw8N8Ki', 
            liveUrl: 'https://seu-site.com/projeto1', 
            technologies: ['React', 'Tailwind CSS', 'Vite'],
        },
        {
            id: 2,
            title: 'Relógio Digital Dinâmico',
            imageUrl: '/relogio.png', 
            repoUrl: 'https://github.com/seu-usuario/projeto2', 
            liveUrl: 'https://lnkd.in/dqjzw5Zv', 
            technologies: ['JavaScript', 'HTML', 'CSS'],
        },
        
    ];

    return (
        <>
            <Header />
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold mb-4 text-center">Meus Projetos</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projetos.map((projeto) => (
                        <div key={projeto.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                            <img
                                src={projeto.imageUrl}
                                alt={projeto.title}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-semibold">{projeto.title}</h2>
                                <div className="flex space-x-4 my-2">
                                    <a href={projeto.repoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                        Repositório
                                    </a>
                                    <a href={projeto.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                        Página Web
                                    </a>
                                </div>
                                <p className="mt-2">
                                    <strong>Tecnologias:</strong> {projeto.technologies.join(', ')}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Projetos;
