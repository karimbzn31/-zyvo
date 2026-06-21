import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Sparkles, ShieldCheck, Star, Users, 
  Wrench, Home as HomeIcon, Monitor, Zap, Heart, 
  ChevronRight, Clock, MapPin, Quote 
} from 'lucide-react'

const services = [
  { icon: HomeIcon, title: 'Ménage', desc: 'Nettoyage premium', color: 'from-blue-500/20 to-blue-600/5', border: 'hover:border-blue-500/30' },
  { icon: Wrench, title: 'Plomberie', desc: 'Artisans certifiés', color: 'from-purple-500/20 to-purple-600/5', border: 'hover:border-purple-500/30' },
  { icon: Monitor, title: 'Numérique', desc: 'Tech & design', color: 'from-cyan-500/20 to-cyan-600/5', border: 'hover:border-cyan-500/30' },
  { icon: Zap, title: 'Déménagement', desc: 'Rapide & fiable', color: 'from-amber-500/20 to-amber-600/5', border: 'hover:border-amber-500/30' },
  { icon: Heart, title: 'Santé', desc: 'Soins à domicile', color: 'from-emerald-500/20 to-emerald-600/5', border: 'hover:border-emerald-500/30' },
  { icon: Star, title: 'Cours', desc: 'Professeurs privés', color: 'from-pink-500/20 to-pink-600/5', border: 'hover:border-pink-500/30' },
]

const stats = [
  { value: '500+', label: 'Prestataires vérifiés' },
  { value: '5 000+', label: 'Missions réalisées' },
  { value: '4.9', label: 'Note moyenne' },
  { value: '24/7', label: 'Support disponible' },
]

const testimonials = [
  { name: 'Sarah K.', role: 'Cliente', text: 'J\'ai trouvé une femme de ménage en 24h. Service impeccable, je recommande !', rating: 5 },
  { name: 'Mohamed L.', role: 'Client', text: 'Le plombier était ponctuel, compétent et prix très correct. Rare de nos jours.', rating: 5 },
  { name: 'Amina R.', role: 'Cliente', text: 'Plateforme sérieuse avec des prestataires vérifiés. Je me sens en confiance.', rating: 5 },
]

export default function Home() {
  const [visible, setVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(v => ({ ...v, [entry.target.dataset.section]: true }))
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('[data-section]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative">
      {/* FLOATING ORBS */}
      <div className="orb w-[500px] h-[500px] bg-blue-500/10 top-[-100px] right-[-100px]" />
      <div className="orb w-[400px] h-[400px] bg-purple-500/10 bottom-[200px] left-[-150px]" />
      <div className="orb w-[300px] h-[300px] bg-cyan-500/10 top-[50%] right-[-50px]" />

      {/* HERO CINÉMATIQUE */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16">
        <div className="w-full">
          <div className="max-w-4xl" data-section="hero">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zyvo-muted mb-8 ${visible.hero ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <Sparkles className="w-4 h-4 text-zyvo-primary" />
              Le marketplace de services en Algérie
            </div>

            <h1 className={`text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight ${visible.hero ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
              Trouvez
              <br />
              <span className="gradient-text">le pro</span>
              <br />
              qu'il vous faut.
            </h1>

            <p className={`text-lg sm:text-xl text-zyvo-muted mt-6 max-w-2xl leading-relaxed ${visible.hero ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
              Le premier marketplace de services en Algérie. Des prestataires vérifiés,
              notés et disponibles près de chez vous. Ménage, plomberie, cours, santé : le bon pro à portée de clic.
            </p>

            <div className={`flex flex-wrap gap-4 mt-10 ${visible.hero ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
              <Link
                to="/search"
                className="group relative inline-flex items-center gap-2 gradient-primary text-white font-bold px-8 py-4 rounded-2xl gradient-glow hover:scale-105 transition-all duration-300"
              >
                Trouver un service
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/auth"
                className="inline-flex items-center gap-2 glass-premium-light text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                Devenir prestataire
              </Link>
            </div>

            <div className={`flex items-center gap-6 mt-12 text-sm text-zyvo-muted ${visible.hero ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-zyvo-primary to-zyvo-accent flex items-center justify-center text-[10px] font-bold text-white border-2 border-zyvo-dark">
                    {['S','K','M','A'][i-1]}
                  </div>
                ))}
              </div>
              <span>Rejoint par <strong className="text-white">5 000+</strong> clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section data-section="stats" className="py-16">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${visible.stats ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {stats.map((s, i) => (
            <div key={s.label} className={`glass-premium rounded-2xl p-6 text-center card-hover animate-scale-in`}
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text">{s.value}</div>
              <div className="text-sm text-zyvo-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES - BENTO GRID */}
      <section data-section="services" className="py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold ${visible.services ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Services <span className="gradient-text">premium</span>
            </h2>
            <p className={`text-zyvo-muted mt-2 ${visible.services ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
              Des professionnels vérifiés pour chaque besoin
            </p>
          </div>
          <Link to="/search" className="hidden sm:flex items-center gap-1 text-sm text-zyvo-primary hover:underline">
            Voir tout <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Link
              key={s.title}
              to="/search"
              className={`group relative overflow-hidden glass-premium rounded-2xl p-6 card-hover ${s.border} animate-scale-in`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <s.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                <p className="text-sm text-zyvo-muted">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs text-zyvo-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Découvrir <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section data-section="trust" className="py-16">
        <div className="glass-premium rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
          <div className="relative z-10">
            <div className={`text-center mb-10 ${visible.trust ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-3xl sm:text-4xl font-extrabold">
                Pourquoi nous <span className="gradient-text">faire confiance</span>
              </h2>
              <p className="text-zyvo-muted mt-2">La tranquillité d'esprit avant tout</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, title: 'Identité vérifiée', desc: 'Chaque prestataire passe une vérification rigoureuse de son identité' },
                { icon: Star, title: 'Avis authentiques', desc: 'Tous les avis sont vérifiés pour vous garantir une transparence totale' },
                { icon: Users, title: 'Support 7j/7', desc: 'Notre équipe est disponible via WhatsApp pour vous assister à tout moment' },
              ].map((item, i) => (
                <div key={item.title} className={`text-center p-6 animate-scale-in`} style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 gradient-glow">
                    <item.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-zyvo-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section data-section="testimonials" className="py-16">
        <div className="text-center mb-10">
          <h2 className={`text-3xl sm:text-4xl font-extrabold ${visible.testimonials ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Ce qu'ils <span className="gradient-text">disent</span>
          </h2>
          <p className={`text-zyvo-muted mt-2 ${visible.testimonials ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
            Des milliers de clients satisfaits
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className={`glass-premium rounded-2xl p-6 card-hover animate-scale-in`} style={{ animationDelay: `${i * 0.15}s` }}>
              <Quote className="w-8 h-8 text-zyvo-primary/30 mb-4" />
              <p className="text-sm text-zyvo-muted leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-zyvo-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="relative overflow-hidden gradient-primary rounded-3xl p-8 sm:p-16 text-center gradient-glow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Prêt à trouver le bon pro ?
            </h2>
            <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
              Rejoignez des milliers de clients satisfaits à Alger et dans toute l'Algérie.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/search"
                className="inline-flex items-center gap-2 bg-white text-zyvo-dark font-bold px-8 py-4 rounded-2xl hover:bg-white/90 hover:scale-105 transition-all duration-300"
              >
                Commencer <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/auth"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Devenir prestataire
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
