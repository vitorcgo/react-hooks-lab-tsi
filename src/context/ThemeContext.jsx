import { createContext, useState } from 'react';

// Exporta o contexto junto ao provedor para uso nas páginas do laboratório.
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState('claro');

  function alternarTema() {
    setTema((atual) => (atual === 'claro' ? 'escuro' : 'claro'));
  }

  return (
    <ThemeContext.Provider value={{ tema, setTema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}