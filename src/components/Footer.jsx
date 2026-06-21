import { Link } from 'lucide-react'

export default function Footer() {
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
        { label: "Conditions d'utilisation", to: '#' },
        { label: 'Politique de confidentialité', to: '#' },
        { label: 'Protection des données', to: '#' },
      ],
    },
  ]

  return (
    <footer className="border-t border-white/5 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl gradient-primary flex items-center justify-center font-bold text-white text-sm gradient-glow">
                Z
              </div>
              <span className="text-lg font-extrabold gradient-text">Zyvo</span>
            </div>
            <p className="text-xs text-zyvo-muted leading-relaxed">
              La plateforme de services de confiance en Algérie. Trouvez des prestataires vérifiés près de chez vous.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {['f', 'in', 'X'].map((s) => (
                <a key={s} href="#" className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="text-xs font-bold text-zyvo-muted">{s}</span>
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-sm mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.to} className="text-xs text-zyvo-muted hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zyvo-muted">
            © 2026 Zyvo Algeria. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-xs text-zyvo-muted">
            <span>🇩🇿 Alger, Algérie</span>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Support WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
