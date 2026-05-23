import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1774974477169-fdd81b2bd8c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    title: 'Farbwelten',
    subtitle: 'Neue Ausstellung',
    description: 'Ab 15. Juni 2026'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1768982417033-485fb6d729a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    title: 'Zeitgenössische Kunst',
    subtitle: 'Galerie Highlights',
    description: 'Entdecken Sie unsere Sammlung'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1759608542767-e1a7c3ac09a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    title: 'Licht & Raum',
    subtitle: 'Installation',
    description: 'Immersive Kunstwerke'
  }
];

export function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <ImageWithFallback
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>

              <div className="absolute inset-0 flex items-end justify-center pb-32">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-center text-white max-w-3xl px-6"
                >
                  <p className="mb-2 tracking-widest uppercase" style={{ fontSize: '0.875rem', fontWeight: 300 }}>
                    {heroSlides[currentSlide].subtitle}
                  </p>
                  <h2 className="mb-4" style={{ fontSize: '4rem', fontWeight: 300, letterSpacing: '0.05em' }}>
                    {heroSlides[currentSlide].title}
                  </h2>
                  <p style={{ fontSize: '1.25rem', fontWeight: 300 }}>
                    {heroSlides[currentSlide].description}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/80 hover:bg-white rounded-full transition-all backdrop-blur-sm"
          aria-label="Vorheriges Bild"
        >
          <ChevronLeft size={28} className="text-black" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/80 hover:bg-white rounded-full transition-all backdrop-blur-sm"
          aria-label="Nächstes Bild"
        >
          <ChevronRight size={28} className="text-black" />
        </button>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Gehe zu Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-6 text-black" style={{ fontSize: '2.5rem', fontWeight: 300 }}>
            Willkommen bei zickzack
          </h3>
          <p className="text-black/70 leading-relaxed mb-4" style={{ fontSize: '1.25rem', fontWeight: 300 }}>
            Unsere Galerie widmet sich zeitgenössischer Kunst und präsentiert sowohl etablierte als auch aufstrebende Künstlerinnen und Künstler.
          </p>
          <p className="text-black/70 leading-relaxed" style={{ fontSize: '1.25rem', fontWeight: 300 }}>
            Entdecken Sie einzigartige Werke, die Grenzen überschreiten und neue Perspektiven eröffnen.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
