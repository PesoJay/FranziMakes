import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';

const shopItems = [
  {
    id: 1,
    title: 'Abstrakte Komposition No. 5',
    artist: 'Fons Heijnsbroek',
    price: '1.200 €',
    image: 'https://images.unsplash.com/photo-1768656279847-84ce28e71cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    medium: 'Acryl auf Leinwand',
    size: '80 x 100 cm',
    available: true
  },
  {
    id: 2,
    title: 'Farbenspiel Installation',
    artist: 'yanzheng xia',
    price: '3.500 €',
    image: 'https://images.unsplash.com/photo-1774974477169-fdd81b2bd8c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    medium: 'Mixed Media Installation',
    size: 'Variable Dimensionen',
    available: true
  },
  {
    id: 3,
    title: 'Gesichter der Moderne',
    artist: 'Aimar Gallardo',
    price: '890 €',
    image: 'https://images.unsplash.com/photo-1763116147265-6f9fda3934da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    medium: 'Acryl auf Wand',
    size: '60 x 80 cm',
    available: false
  },
  {
    id: 4,
    title: 'Expressiver Moment',
    artist: 'ANNIE HATUANH',
    price: '1.450 €',
    image: 'https://images.unsplash.com/photo-1768982417033-485fb6d729a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    medium: 'Öl auf Leinwand',
    size: '90 x 120 cm',
    available: true
  },
  {
    id: 5,
    title: 'Glas Skulptur "Licht"',
    artist: 'Declan Sun',
    price: '2.100 €',
    image: 'https://images.unsplash.com/photo-1759395162335-b93bf86f8d85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    medium: 'Mundgeblasenes Glas',
    size: '45 x 45 x 120 cm',
    available: true
  },
  {
    id: 6,
    title: 'Hängende Skulpturen',
    artist: 'Baron Alloway',
    price: '4.200 €',
    image: 'https://images.unsplash.com/photo-1759608542767-e1a7c3ac09a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    medium: 'Mixed Media Skulptur',
    size: 'Variable Dimensionen',
    available: true
  }
];

export function ShopPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-12">
          <h2 className="mb-4 text-black" style={{ fontSize: '3rem', fontWeight: 300 }}>
            Shop
          </h2>
          <p className="text-black/60 max-w-2xl" style={{ fontSize: '1.125rem', fontWeight: 300 }}>
            Erwerben Sie ausgewählte Kunstwerke aus unserer Galerie. Alle Werke sind Originale und werden mit Echtheitszertifikat geliefert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group relative rounded-lg border border-black/10 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <div className="p-5">
                <h3 className="mb-1" style={{ fontWeight: 300 }}>{item.title}</h3>
                <p className="bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-3" style={{ fontWeight: 400 }}>{item.artist}</p>

                <div className="space-y-1 mb-4 text-black/60" style={{ fontWeight: 300 }}>
                  <p>{item.medium}</p>
                  <p>{item.size}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-black/5">
                  <span className="text-black" style={{ fontWeight: 400, fontSize: '1.25rem' }}>
                    {item.price}
                  </span>
                  {item.available ? (
                    <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-black/80 transition-all duration-300" style={{ fontWeight: 300 }}>
                      <ShoppingCart size={18} />
                      Anfragen
                    </button>
                  ) : (
                    <span className="text-black/40" style={{ fontWeight: 300 }}>Verkauft</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
