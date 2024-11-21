import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderTemplate from './componets/templates/HeaderTemplate';
import { ThemeProvider } from '@mui/material/styles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HeaderTemplate>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Agregar más rutas aquí */}
        </Routes>
      </HeaderTemplate>
    </BrowserRouter>
  </StrictMode>,
)
