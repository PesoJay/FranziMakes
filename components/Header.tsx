import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'galerie', label: 'Galerie' },
    { id: 'künstlerinnen', label: 'Künstlerinnen' },
    { id: 'ausstellungen', label: 'Ausstellungen' },
    { id: 'shop', label: 'Shop' },
    { id: 'kontakt', label: 'Kontakt' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 relative">
          <button
            onClick={() => onNavigate('shop')}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-2 hover:bg-black/5 rounded-full transition-colors"
            aria-label="Shop"
          >
            <ShoppingBag size={24} className="text-black" />
          </button>

          <motion.h1
            className="text-center cursor-pointer"
            onClick={() => onNavigate('home')}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-black" style={{ fontSize: '2.5rem', fontWeight: 300, letterSpacing: '0.1em' }}>
              zickzack
            </span>
          </motion.h1>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-2 hover:bg-black/5 rounded-full transition-colors"
            aria-label="Menü öffnen"
          >
            {isMenuOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 p-8"
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mt-16 space-y-2">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-6 py-4 rounded-lg transition-colors ${
                      currentPage === item.id
                        ? 'bg-black/5'
                        : 'hover:bg-black/5'
                    }`}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-black" style={{ fontSize: '1.5rem', fontWeight: 300 }}>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;