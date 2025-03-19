import { createRoot } from 'react-dom/client';
import './index.css';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <AppRoutes />
  </HashRouter>
);
