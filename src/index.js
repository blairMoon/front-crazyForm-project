import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import './styles/reset.scss';
import './styles/common.scss';
import Router from './pages/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
  <ChakraProvider>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </ChakraProvider>
);
