import { Link } from 'react-router-dom'
import { Globe, MessageCircle } from 'lucide-react'

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'Ménage & Nettoyage', to: '/search' },
      { label: 'Plomberie', to: '/search' },
      { label: 'Services Numériques', to: '/search' },
      { label: 'Déménagement', to: '/search' },
      { label: 'Cours & Formations', to: '/search' },
      { label: 'Santé & Bien-être', to: '/search' },
    ],
  },
  {
    title: 'Zyvo',
    links: [
      { label: 'À propos', to: '#' },
      { label: 'Blog', to: '#' },
      { label: 'Carrières', to: '#' },
      { label: 'Support', to: '#' },
      { label: 'Devenir prestataire', to: '/auth' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Conditions d\'utilisation', to: '#' },
      { label: 'Politique de confidentialité', to: '#' },
      { label: 'Protection des données', to: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-neon flex items-center justify-center font-bold text-white text-sm shadow-neon">
                Z
              </div>
              <span className="text-lg font-extrabold text-gradient">Zyvo</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              La plateforme de services de confiance en Algérie. Trouvez des prestataires vérifiés près de chez vous.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
                <span className="text-slate-600 text-xs font-bold">f</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
                <span className="text-slate-600 text-xs font-bold">in</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
                <Globe className="w-4 h-4 text-slate-600" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center hover:bg-green-200 transition-colors">
                <MessageCircle className="w-4 h-4 text-green-600" />
              </a>
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-sm mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-xs text-slate-500 hover:text-zyvo-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © 2026 Zyvo Algeria. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>🇩🇿 Alger, Algérie</span>
            <span>•</span>
            <a href="#" className="hover:text-zyvo-primary transition-colors">Support WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
