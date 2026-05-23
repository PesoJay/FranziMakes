import { useState } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';

const artworks = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1774974477169-fdd81b2bd8c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Farbenspiel',
    artist: 'yanzheng xia'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1768982417033-485fb6d729a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Betrachtung',
    artist: 'ANNIE HATUANH'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1763046224157-4095b90a87cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Abstraktion',
    artist: 'BRYNLLD'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1769321013386-25830e12a2af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Moderne Kunst',
    artist: 'PJH'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1768656279847-84ce28e71cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Pinselstriche',
    artist: 'Fons Heijnsbroek'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1759395162335-b93bf86f8d85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Glas Installation',
    artist: 'Declan Sun'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1774514580740-abec6ebeddaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Wandgalerie',
    artist: 'Neon Wang'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1763116147265-6f9fda3934da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Gesichter',
    artist: 'Aimar Gallardo'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1760292343679-b243ec3c9823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Expressiv',
    artist: 'The New York Public Library'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1766083274378-58bbff0ffc93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Klassisch Modern',
    artist: 'National Gallery of Art'
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1759608542767-e1a7c3ac09a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Hängend',
    artist: 'Baron Alloway'
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1759156839410-3cffcdec0353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Lebendig',
    artist: 'Fons Heijnsbroek'
  }
];

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-black"
            style={{ fontSize: '3rem', fontWeight: 300 }}
          >
            Galerie
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-black/60"
            style={{ fontSize: '1.125rem', fontWeight: 300 }}
          >
            Zeitgenössische Kunst und abstrakte Werke
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-100 border border-black/5">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-pink-500/0 to-purple-600/0 group-hover:from-cyan-500/10 group-hover:via-pink-500/10 group-hover:to-purple-600/10 transition-all duration-500 z-10"></div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <ImageWithFallback
                    src={artwork.url}
                    alt={artwork.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <h3 className="text-white" style={{ fontWeight: 300 }}>{artwork.title}</h3>
                  <p className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent" style={{ fontWeight: 300 }}>{artwork.artist}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-5xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={artworks[selectedImage].url}
              alt={artworks[selectedImage].title}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent rounded-b-lg">
              <h2 className="text-white mb-2" style={{ fontWeight: 300 }}>{artworks[selectedImage].title}</h2>
              <p className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent" style={{ fontWeight: 300 }}>{artworks[selectedImage].artist}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
