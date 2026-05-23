import { motion } from 'motion/react';

const artists = [
  {
    name: 'yanzheng xia',
    specialty: 'Installation & Farbspiel',
    bio: 'Spezialisiert auf großformatige Installationen mit intensiven Farbwelten.'
  },
  {
    name: 'ANNIE HATUANH',
    specialty: 'Abstrakte Malerei',
    bio: 'Erforscht die Beziehung zwischen Betrachter und abstrakter Kunst.'
  },
  {
    name: 'BRYNLLD',
    specialty: 'Zeitgenössische Abstraktion',
    bio: 'Schafft lebendige Kompositionen mit kräftigen Farbkontrasten.'
  },
  {
    name: 'Fons Heijnsbroek',
    specialty: 'Expressionismus',
    bio: 'Arbeitet mit dynamischen Pinselstrichen und intensiven Farben.'
  },
  {
    name: 'Declan Sun',
    specialty: 'Installation & Skulptur',
    bio: 'Kreiert faszinierende Glas- und Lichtinstallationen.'
  },
  {
    name: 'Neon Wang',
    specialty: 'Kuratierung & Komposition',
    bio: 'Meister der Wandgestaltung und visuellen Narrativen.'
  },
  {
    name: 'Aimar Gallardo',
    specialty: 'Figuration & Abstraktion',
    bio: 'Verbindet menschliche Formen mit abstrakten Elementen.'
  },
  {
    name: 'Baron Alloway',
    specialty: 'Raum & Skulptur',
    bio: 'Erforscht die Beziehung zwischen Raum und hängenden Objekten.'
  }
];

export function ArtistPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-12">
          <h2 className="mb-4 text-black" style={{ fontSize: '3rem', fontWeight: 300 }}>
            Künstlerinnen
          </h2>
          <p className="text-black/60 max-w-2xl" style={{ fontSize: '1.125rem', fontWeight: 300 }}>
            Entdecken Sie die talentierten Künstlerinnen und Künstler, die unsere Galerie mit ihren einzigartigen Werken bereichern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-lg border border-black/10 hover:border-black/20 hover:shadow-lg transition-all duration-300 bg-white group"
            >
              <div className="relative">
                <h3 className="mb-2 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-600 bg-clip-text text-transparent" style={{ fontWeight: 400 }}>{artist.name}</h3>
                <p className="text-black/50 mb-3" style={{ fontSize: '1rem', fontWeight: 300 }}>{artist.specialty}</p>
                <p className="text-black/60 leading-relaxed" style={{ fontWeight: 300 }}>{artist.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
