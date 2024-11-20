
import './App.css';
import './index.css';
import AppRoutes from './routes';
import { AppProvider } from './context/AppContext'; 

function App() {
  return (
    <AppProvider> 
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
