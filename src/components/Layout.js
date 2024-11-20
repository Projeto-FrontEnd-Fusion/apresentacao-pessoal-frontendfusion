// src/components/ResponsiveLayout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

function ResponsiveLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default ResponsiveLayout;
