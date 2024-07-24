// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const socialLinks = [
    { name: 'Leonardo Matheus', url: 'https://www.linkedin.com/in/leonardo-matheus-da-silva-127946125/', icon: <FaLinkedin /> },
    { name: 'LeoST25', url: 'https://github.com/LeoST25', icon: <FaGithub /> },
    // Adicione outras redes sociais aqui
];

const SocialLinks = () => {
    return (
        <div className="social-links">
            <h2>Redes Sociais</h2>
            <ul className="links-social">
                {socialLinks.map(link => (
                    <li key={link.name}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer"> {link.icon} {link.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
