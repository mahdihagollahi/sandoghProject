'use client';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import DesktopOnly from '../app/components/UserPage/DesktopOnly';

import './globals.css';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
       <DesktopOnly>
      <html lang="fa" dir="rtl" className='font-iransans '>
        <body className='font-iransansNumber'>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </body>
      </html>
      </DesktopOnly>
    </QueryClientProvider>
  );
}

