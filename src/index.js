import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/reset.scss';
import './styles/common.scss';
import Router from './pages/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={true} />
    <Router />
  </QueryClientProvider>
);
