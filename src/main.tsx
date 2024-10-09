import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import AppRoute from './pages/AppRoute';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <AppRoute />
        </HelmetProvider>
    </StrictMode>,
);
