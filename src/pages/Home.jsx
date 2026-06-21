import { Wrench, Home as HomeIcon, Monitor, Truck, GraduationCap, HeartPulse, ShieldCheck, Star, ChevronRight, ArrowRight, CheckCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  { icon: HomeIcon, title: 'Ménage & Nettoyage', desc: 'Nettoyage complet de votre maison ou appartement' },
  { icon: Wrench, title: 'Plomberie', desc: 'Plombiers certifiés pour tous vos travaux' },
  { icon: Monitor, title: 'Services Numériques', desc: 'Développement web, design, support technique' },
  { icon: Truck, title: 'Déménagement', desc: 'Déménageurs professionnels et rapides' },
  { icon: GraduationCap, title: 'Cours & Formations', desc: 'Professeurs particuliers pour tous les niveaux' },
  { icon: HeartPulse, title: 'Santé & Bien-être', desc: 'Professionnels de santé à votre domicile' },
]

const trustItems = [
  { icon: Star, label: 'Notes et avis vérifiés', desc: 'Consultez les avis des clients' },
  { icon: ShieldCheck, label: 'Identité vérifiée', desc: 'Tous nos prestataires sont contrôlés' },
  { icon: CheckCircle, label: '2+ ans d\'expérience', desc: 'Une expérience requise pour rejoindre Zyvo' },
  { icon: Phone, label: 'Support 7j/7', desc: 'Assistance WhatsApp disponible' },
]

const howItWorks = [
  { step: '1', title: 'Choisissez un service', desc: 'Parcourez nos catégories et trouvez le service qu\'il vous faut' },
  { step: '2', title: 'Réservez en ligne', desc: 'Sélectionnez votre prestataire et réservez en quelques clics' },
  { step: '3', title: 'Service à domicile', desc: 'Le prestataire arrive chez vous. Paiement cash ou en ligne' },
]

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="py-12 lg:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Tous les services<br />
            <span className="text-gradient">dont vous avez besoin.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-500 mt-4 max-w-xl leading-relaxed">
            Des prestataires vérifiés, notés et disponibles près de chez vous en Algérie.
            Ménage, plomberie, cours, santé et plus encore.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              to="/search"
              className="inline-flex items-center gap-2 gradient-neon text-white font-bold px-6 py-3 rounded-xl text-sm shadow-neon hover:opacity-90 transition-all"
            >
              Trouver un service
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/auth"
              className="inline-flex items-center gap-2 bg-white text-zyvo-dark font-bold px-6 py-3 rounded-xl text-sm border border-slate-200 hover:border-slate-300 transition-all"
            >
              Devenir prestataire
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-10 lg:py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Nos services</h2>
          <Link to="/search" className="text-sm font-bold text-zyvo-primary hover:underline flex items-center gap-1">
            Voir tout <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <button
              key={s.title}
              className="bg-white rounded-2xl p-6 text-left border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all active:scale-[0.98] group"
            >
              <div className="w-12 h-12 rounded-xl bg-zyvo-primary/5 flex items-center justify-center mb-4 group-hover:bg-zyvo-primary/10 transition-colors">
                <s.icon className="w-6 h-6 text-zyvo-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-base mb-1">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </button>
          ))}
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-10 lg:py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Votre confiance est notre priorité
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Nous vérifions chaque prestataire pour votre tranquillité
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div key={item.label} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-zyvo-primary/5 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-7 h-7 text-zyvo-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-sm mb-1">{item.label}</h3>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-10 lg:py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Comment ça marche
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Trois étapes simples pour trouver le bon professionnel
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {howItWorks.map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 rounded-xl gradient-neon flex items-center justify-center text-lg font-bold text-white shadow-neon mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-bold text-base mb-1">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA WORKER */}
      <section className="py-10 lg:py-16">
        <div className="bg-gradient-to-br from-zyvo-primary to-zyvo-neon rounded-3xl p-8 sm:p-12 text-center text-white shadow-neon">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Vous voulez travailler avec Zyvo ?
          </h2>
          <p className="text-sm sm:text-base text-white/80 mt-3 max-w-lg mx-auto">
            Devenez votre propre patron, choisissez vos horaires et travaillez dans les quartiers que vous préférez.
          </p>
          <Link
            to="/auth"
            className="inline-flex items-center gap-2 bg-white text-zyvo-primary font-bold px-6 py-3 rounded-xl text-sm mt-6 hover:bg-white/90 transition-all"
          >
            Postuler maintenant
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
