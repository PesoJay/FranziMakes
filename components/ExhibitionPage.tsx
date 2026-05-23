import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';

const exhibitions = [
  {
    id: 1,
    title: 'Farbwelten',
    subtitle: 'Abstrakte Kompositionen',
    date: '15. Juni - 30. August 2026',
    location: 'Hauptgalerie, 1. Etage',
    description: 'Eine Reise durch lebendige Farbwelten zeitgenössischer Künstler. Diese Ausstellung präsentiert kraftvolle abstrakte Werke, die Emotionen durch Farbe und Form ausdrücken.',
    status: 'aktuell',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Licht & Raum',
    subtitle: 'Installationen',
    date: '10. September - 15. November 2026',
    location: 'Untere Galerie',
    description: 'Erfahren Sie die Beziehung zwischen Licht, Raum und Material in immersiven Installationen von führenden zeitgenössischen Künstlern.',
    status: 'kommend',
    color: 'from-pink-500 to-purple-600'
  },
  {
    id: 3,
    title: 'Gesichter der Zeit',
    subtitle: 'Portraitkunst neu gedacht',
    date: '5. Januar - 28. Februar 2026',
    location: 'Hauptgalerie',
    description: 'Eine retrospektive Betrachtung der Portraitkunst mit modernen Interpretationen klassischer Formen.',
    status: 'vergangen',
    color: 'from-purple-500 to-indigo-600'
  }
];

export function ExhibitionPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-12">
          <h2 className="mb-4 text-black" style={{ fontSize: '3rem', fontWeight: 300 }}>
            Ausstellungen
          </h2>
          <p className="text-black/60 max-w-2xl" style={{ fontSize: '1.125rem', fontWeight: 300 }}>
            Entdecken Sie unsere aktuellen und kommenden Ausstellungen mit Werken zeitgenössischer Künstler.
          </p>
        </div>

        <div className="space-y-8">
          {exhibitions.map((exhibition, index) => (
            <motion.div
              key={exhibition.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-black/10 hover:border-black/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 style={{ fontWeight: 300 }}>{exhibition.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        exhibition.status === 'aktuell'
                          ? 'bg-green-100 text-green-700'
                          : exhibition.status === 'kommend'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {exhibition.status === 'aktuell' ? 'Aktuell' : exhibition.status === 'kommend' ? 'Demnächst' : 'Vergangen'}
                      </span>
                    </div>
                    <p className="text-black/50 mb-4" style={{ fontWeight: 300 }}>{exhibition.subtitle}</p>
                  </div>
                </div>

                <p className="text-black/70 leading-relaxed mb-6" style={{ fontWeight: 300 }}>
                  {exhibition.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 text-black/60">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-pink-500" />
                    <span>{exhibition.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-purple-500" />
                    <span>{exhibition.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
