import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "antd/dist/reset.css";
import { Provider } from "react-redux"; 
import { store } from "./Redux/store"; 
import AOS from 'aos';
import 'aos/dist/aos.css';

// Inicializa o AOS quando o componente for montado
AOS.init({
  duration: 1200,  // Duração das animações
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}> {/* Envolvendo a aplicação com o Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
