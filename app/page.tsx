'use client'
import { useState } from 'react';
import Header from '@/components/Header';
import { HomePage } from '@/components/HomePage';
import { ArtistPage } from '@/components/ArtistPage';
import { ContactPage } from '@/components/ContactPage';
import { GalleryPage } from '@/components/GalleryPage';
import { ShopPage } from '@/components/ShopPage';
import { ExhibitionPage } from '@/components/ExhibitionPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'künstlerinnen':
        return <ArtistPage />;
      case 'kontakt':
        return <ContactPage />;
      case 'galerie':
        return <GalleryPage />;
      case 'shop':
        return <ShopPage />;
      case 'ausstellungen':
        return <ExhibitionPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}