'use client'
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
<<<<<<< HEAD
import DesktopOnly from '../app/components/UserPage/DesktopOnly';
import { Provider } from 'react-redux';
import { store } from '../app/store';
=======


>>>>>>> 1fa51546bd716fba3a7296fc4123f0e04847fffc
import './globals.css';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
<<<<<<< HEAD
       <Provider store={store}>
       <DesktopOnly>
=======
>>>>>>> 1fa51546bd716fba3a7296fc4123f0e04847fffc
      <html lang="fa" dir="rtl" className='font-iransans '>
        <body className='font-iransansNumber'>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </body>
      </html>
<<<<<<< HEAD
      </DesktopOnly>
      </Provider>
=======
>>>>>>> 1fa51546bd716fba3a7296fc4123f0e04847fffc
    </QueryClientProvider>
  );
}

