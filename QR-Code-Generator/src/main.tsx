import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import QrCodeGenerator from './Code_Generator';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QrCodeGenerator />
  </StrictMode>,
)
