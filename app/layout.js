"use client"
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const metadata = {
    title: 'Listy',
    description: 'Generated by Azaharul Islam',
  };

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <NextUIProvider>
         
          <main>
            {children}
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
