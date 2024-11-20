import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext'; 

function Footer() {
    const { state } = useContext(AppContext);

    return (
        <footer className={`p-4 text-center ${state.theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`}>
            <p className={state.theme === 'light' ? 'text-black' : 'text-white'}>
                © 2024 João Batista.dev
            </p>
        </footer>
    );
}

export default Footer;
