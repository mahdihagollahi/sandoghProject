'use client'
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import { store } from '../app/store';




import './globals.css';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {

  
  return (
    <QueryClientProvider client={queryClient}>

       <Provider store={store}>
      <html lang="fa" dir="rtl" className='font-iransans h-full' 
         style={{ backgroundColor: '#f8f8f8' , }}
      >
        <body className='font-iransansNumber h-full'>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </body>
      </html>
      </Provider>
    </QueryClientProvider>
  );
}

