import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/reset.scss';
import './styles/common.scss';
import Router from './pages/Router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
