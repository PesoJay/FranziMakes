import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-12">
          <h2 className="mb-4 text-black" style={{ fontSize: '3rem', fontWeight: 300 }}>
            Kontakt
          </h2>
          <p className="text-black/60 max-w-2xl" style={{ fontSize: '1.125rem', fontWeight: 300 }}>
            Haben Sie Fragen zu unseren Ausstellungen oder Interesse an einem Kunstwerk? Wir freuen uns auf Ihre Nachricht.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6" style={{ fontWeight: 300 }}>Kontaktinformationen</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black/5 rounded-lg">
                    <MapPin className="text-black" size={24} />
                  </div>
                  <div>
                    <p className="text-black/60 mb-1" style={{ fontWeight: 300 }}>Adresse</p>
                    <p className="text-black" style={{ fontWeight: 300 }}>Kunststraße 42</p>
                    <p className="text-black" style={{ fontWeight: 300 }}>10115 Berlin</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black/5 rounded-lg">
                    <Phone className="text-black" size={24} />
                  </div>
                  <div>
                    <p className="text-black/60 mb-1" style={{ fontWeight: 300 }}>Telefon</p>
                    <p className="text-black" style={{ fontWeight: 300 }}>+49 30 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black/5 rounded-lg">
                    <Mail className="text-black" size={24} />
                  </div>
                  <div>
                    <p className="text-black/60 mb-1" style={{ fontWeight: 300 }}>E-Mail</p>
                    <p className="text-black" style={{ fontWeight: 300 }}>info@zickzack-galerie.de</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black/5 rounded-lg">
                    <Mail className="text-black" size={24} />
                  </div>
                  <div>
                    <p className="text-black/60 mb-1" style={{ fontWeight: 300 }}>Social Media</p>
                    <p className="text-black" style={{ fontWeight: 300 }}>@zickzack.galerie</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-black/10">
              <h4 className="mb-3" style={{ fontWeight: 300 }}>Öffnungszeiten</h4>
              <div className="space-y-2 text-black/70" style={{ fontWeight: 300 }}>
                <div className="flex justify-between">
                  <span>Dienstag - Freitag</span>
                  <span>11:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag</span>
                  <span>10:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sonntag</span>
                  <span>12:00 - 17:00</span>
                </div>
                <div className="flex justify-between text-black/50">
                  <span>Montag</span>
                  <span>Geschlossen</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-50 rounded-lg p-8 border border-black/5"
          >
            <h3 className="mb-6" style={{ fontWeight: 300 }}>Nachricht senden</h3>

            <form className="space-y-5">
              <div>
                <label className="block mb-2 text-black/70" style={{ fontWeight: 300 }}>Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                  placeholder="Ihr Name"
                  style={{ fontWeight: 300 }}
                />
              </div>

              <div>
                <label className="block mb-2 text-black/70" style={{ fontWeight: 300 }}>E-Mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                  placeholder="ihre.email@beispiel.de"
                  style={{ fontWeight: 300 }}
                />
              </div>

              <div>
                <label className="block mb-2 text-black/70" style={{ fontWeight: 300 }}>Betreff</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                  placeholder="Worum geht es?"
                  style={{ fontWeight: 300 }}
                />
              </div>

              <div>
                <label className="block mb-2 text-black/70" style={{ fontWeight: 300 }}>Nachricht</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 transition-all resize-none"
                  placeholder="Ihre Nachricht an uns..."
                  style={{ fontWeight: 300 }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-all duration-300"
                style={{ fontWeight: 300 }}
              >
                Nachricht senden
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
