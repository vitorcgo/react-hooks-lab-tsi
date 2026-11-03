import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* O provedor envolve as rotas para manter o tema durante a navegação. */}
    <ThemeProvider>
      {/* Habilita navegação sem recarregar toda a página. */}
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </StrictMode>
);
