import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Sparkles, ShieldCheck, Star,
  Wrench, Home as HomeIcon, Monitor, Zap, Heart,
  ChevronRight, MapPin, ChevronUp, Search,
  CheckCircle, MessageCircle, ChevronDown, Truck, User
} from 'lucide-react'

const services = [
  { icon: HomeIcon, title: 'Ménage & Nettoyage', desc: 'Nettoyage complet de votre maison par des professionnels vérifiés', 
    color: 'from-blue-500/20 to-blue-600/5', border: 'hover:border-blue-500/30', bg: 'bg-blue-500/10' },
  { icon: Wrench, title: 'Plomberie & Dépannage', desc: 'Plombiers certifiés pour tous vos travaux d\'urgence ou rénovation',
    color: 'from-purple-500/20 to-purple-600/5', border: 'hover:border-purple-500/30', bg: 'bg-purple-500/10' },
  { icon: Monitor, title: 'Services Numériques', desc: 'Développement web, design graphique, support technique à domicile',
    color: 'from-cyan-500/20 to-cyan-600/5', border: 'hover:border-cyan-500/30', bg: 'bg-cyan-500/10' },
  { icon: Zap, title: 'Déménagement', desc: 'Déménageurs professionnels avec camion. Devis gratuit sous 24h',
    color: 'from-amber-500/20 to-amber-600/5', border: 'hover:border-amber-500/30', bg: 'bg-amber-500/10' },
  { icon: Heart, title: 'Santé & Bien-être', desc: 'Infirmiers, kinésithérapeutes et aides-soignants à votre domicile',
    color: 'from-emerald-500/20 to-emerald-600/5', border: 'hover:border-emerald-500/30', bg: 'bg-emerald-500/10' },
  { icon: Star, title: 'Cours Particuliers', desc: 'Professeurs qualifiés pour tous niveaux : langues, maths, musique et plus',
    color: 'from-pink-500/20 to-pink-600/5', border: 'hover:border-pink-500/30', bg: 'bg-pink-500/10' },
  { icon: CheckCircle, title: 'Coiffure & Esthétique', desc: 'Coiffeurs, maquilleurs et esthéticiennes à domicile',
    color: 'from-rose-500/20 to-rose-600/5', border: 'hover:border-rose-500/30', bg: 'bg-rose-500/10' },
  { icon: Truck, title: 'Transport & Logistique', desc: 'Livraison de colis, transport de meubles et courses',
    color: 'from-orange-500/20 to-orange-600/5', border: 'hover:border-orange-500/30', bg: 'bg-orange-500/10' },
]

const cities = ['Alger', 'Oran', 'Constantine', 'Annaba', 'Blida', 'Sétif', 'Tizi Ouzou', 'Béjaïa', 'Tlemcen', 'Biskra', 'Chlef', 'Boumerdès']

const topProviders = [
  { name: 'Karim B.', service: 'Plombier certifié', rating: 4.9, reviews: 120, price: '1 500 DA/h', verified: true,
    gradient: 'from-blue-500 to-cyan-400' },
  { name: 'Amina K.', service: 'Aide à domicile', rating: 5.0, reviews: 85, price: '1 200 DA/h', verified: true,
    gradient: 'from-purple-500 to-pink-400' },
  { name: 'Mohamed L.', service: 'Électricien', rating: 4.8, reviews: 64, price: '1 800 DA/h', verified: true,
    gradient: 'from-amber-500 to-orange-400' },
  { name: 'Sara B.', service: 'Coiffeuse à domicile', rating: 4.9, reviews: 42, price: '2 000 DA/séance', verified: true,
    gradient: 'from-emerald-500 to-teal-400' },
]

const testimonials = [
  { name: 'Sarah K.', role: 'Cliente', text: 'J\'ai trouvé une femme de ménage en 24h. Service impeccable, ponctuelle et très professionnelle. Je recommande les yeux fermés !', rating: 5,
    gradient: 'from-pink-500 to-rose-400' },
  { name: 'Mohamed L.', role: 'Client', text: 'Le plombier est arrivé dans l\'heure, a diagnostiqué le problème rapidement et le prix était très correct. Rare de nos jours.', rating: 5,
    gradient: 'from-blue-500 to-cyan-400' },
  { name: 'Amina R.', role: 'Cliente', text: 'Plateforme sérieuse avec des prestataires vérifiés. Je peux enfin laisser quelqu\'un entrer chez moi en toute confiance.', rating: 5,
    gradient: 'from-purple-500 to-violet-400' },
  { name: 'Youcef K.', role: 'Client', text: 'J\'ai pris un cours de maths pour mon fils. Le professeur était excellent et mon fils a beaucoup progressé. Merci Zyvo !', rating: 5,
    gradient: 'from-emerald-500 to-teal-400' },
]

const faqs = [
  { q: 'Comment sont vérifiés les prestataires ?', a: 'Chaque prestataire passe un processus de vérification rigoureux : pièce d\'identité, références vérifiées, entretien téléphonique et validation manuelle par notre équipe.' },
  { q: 'Comment se passe le paiement ?', a: 'Vous pouvez payer en cash directement au prestataire après la prestation, ou en ligne via carte bancaire/CPT. Zyvo ne prélève aucune commission sur le paiement cash.' },
  { q: 'Puis-je annuler une réservation ?', a: 'Oui, l\'annulation est gratuite jusqu\'à 2 heures avant le début de la prestation. Passé ce délai, des frais peuvent s\'appliquer.' },
  { q: 'Que faire si je ne suis pas satisfait ?', a: 'Votre satisfaction est notre priorité. Contactez notre support WhatsApp au +213 XXX XX XX XX et nous trouverons une solution ensemble.' },
  { q: 'Les prestataires sont-ils assurés ?', a: 'Oui, tous nos prestataires partenaires bénéficient d\'une assurance responsabilité civile professionnelle pour votre tranquillité.' },
  { q: 'Dans quelles villes Zyvo est-il disponible ?', a: 'Zyvo est disponible à Alger, Oran, Constantine, Annaba, Blida, Sétif, Tizi Ouzou, Béjaïa, Tlemcen et plus de 20 villes en Algérie.' },
]

function AnimatedCounter({ target, suffix, label, visible, delay }) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (visible && !started.current) {
      started.current = true
      const duration = 2000
      const steps = 60
      const increment = parseInt(target) / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= parseInt(target)) {
          setCount(parseInt(target))
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [visible, target])

  return (
    <div className={`glass-premium rounded-2xl p-6 text-center card-hover animate-scale-in`}
      style={{ animationDelay: `${delay}s` }}>
      <div className="text-3xl sm:text-4xl font-extrabold gradient-text">
        {count}{suffix}
      </div>
      <div className="text-sm text-zyvo-muted mt-1">{label}</div>
    </div>
  )
}

function PhoneMockup() {
  return (
    <div className="relative w-[280px] h-[580px] mx-auto lg:mx-0">
      {/* Phone body */}
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-slate-700 to-slate-900 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
        {/* Screen */}
        <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-zyvo-dark relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-slate-600" />
            <div className="w-16 h-1.5 rounded-full bg-slate-800" />
          </div>
          {/* Screen content */}
          <div className="absolute inset-0 p-4 pt-8">
            {/* Status bar */}
            <div className="flex justify-between text-[8px] text-zyvo-muted mb-4 px-1">
              <span>9:41</span>
              <span>📶 🔋</span>
            </div>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-md gradient-primary flex items-center justify-center text-[8px] font-bold text-white">Z</div>
                <span className="text-xs font-bold gradient-text">Zyvo</span>
              </div>
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                <User className="w-3 h-3 text-zyvo-muted" />
              </div>
            </div>
            {/* Search bar */}
            <div className="bg-white/10 rounded-xl p-2.5 mb-3 flex items-center gap-1.5">
              <Search className="w-3 h-3 text-zyvo-muted" />
              <span className="text-[8px] text-zyvo-muted">Quel service ?</span>
            </div>
            {/* Categories */}
            <div className="grid grid-cols-3 gap-1.5 mb-3">
              {['🏠', '🔧', '💻', '📦', '🎓', '🏥'].map((e, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-2 text-center">
                  <div className="text-sm">{e}</div>
                </div>
              ))}
            </div>
            {/* Provider card */}
            <div className="bg-white/10 rounded-xl p-2.5 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-[8px] font-bold text-white">K</div>
              <div className="flex-1">
                <div className="text-[8px] font-bold text-white">Karim B.</div>
                <div className="text-[7px] text-zyvo-muted">Plombier • ⭐ 4.9</div>
              </div>
              <div className="text-[7px] font-bold text-white">1 500 DA</div>
            </div>
            {/* Bottom nav */}
            <div className="absolute bottom-2 left-2 right-2 bg-white/10 rounded-xl p-2 flex justify-around">
              {[0,1,2,3,4].map(i => (
                <div key={i} className={`w-4 h-4 rounded-full ${i === 0 ? 'bg-zyvo-primary' : 'bg-white/20'}`} />
              ))}
            </div>
          </div>
          {/* Glare */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        </div>
      </div>
      {/* Floating glow */}
      <div className="absolute -inset-4 gradient-primary rounded-[4rem] blur-3xl opacity-20 -z-10" />
    </div>
  )
}

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="glass-premium rounded-2xl overflow-hidden card-hover">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="font-bold text-sm text-white">{q}</span>
        <ChevronDown className={`w-4 h-4 text-zyvo-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-5 pb-5 text-sm text-zyvo-muted leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [visible, setVisible] = useState({})
  const [openFaq, setOpenFaq] = useState(null)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(v => ({ ...v, [entry.target.dataset.section]: true }))
        }
      })
    }, { threshold: 0.15 })

    document.querySelectorAll('[data-section]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
      setShowBackToTop(scrollTop > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      {/* SCROLL PROGRESS BAR */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-white/5">
        <div className="h-full gradient-primary transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* BACK TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-24 md:bottom-8 right-4 sm:right-8 z-50 w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center gradient-glow transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ChevronUp className="w-5 h-5 text-white" />
      </button>

      {/* FLOATING ORBS */}
      <div className="orb w-[600px] h-[600px] bg-blue-500/8 top-[-200px] right-[-200px]" />
      <div className="orb w-[500px] h-[500px] bg-purple-500/8 bottom-[300px] left-[-200px]" />
      <div className="orb w-[400px] h-[400px] bg-cyan-500/8 top-[40%] right-[-100px]" />

      {/* ===== HERO SPLIT ===== */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16" data-section="hero">
            {/* LEFT: Text */}
            <div className="flex-1 max-w-2xl">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zyvo-muted mb-8 ${visible.hero ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <Sparkles className="w-4 h-4 text-zyvo-primary" />
                Le marketplace de services en Algérie
              </div>

              <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight ${visible.hero ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
                Trouvez
                <br />
                <span className="gradient-text">le pro</span>
                <br />
                qu'il vous faut.
              </h1>

              <p className={`text-base sm:text-lg text-zyvo-muted mt-6 max-w-xl leading-relaxed ${visible.hero ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
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
                  {['S','K','M','A'].map((letter, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br ${['from-blue-500 to-cyan-400','from-purple-500 to-pink-400','from-amber-500 to-orange-400','from-emerald-500 to-teal-400'][i]} flex items-center justify-center text-[10px] font-bold text-white border-2 border-zyvo-dark`}>
                      {letter}
                    </div>
                  ))}
                </div>
                <span>Rejoint par <strong className="text-white">5 000+</strong> clients</span>
              </div>
            </div>

            {/* RIGHT: Phone Mockup */}
            <div className={`flex-1 flex justify-center ${visible.hero ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CITIES BADGES ===== */}
      <section className="py-8">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2">
          <div className="flex items-center gap-1.5 text-sm font-semibold text-zyvo-muted shrink-0">
            <MapPin className="w-4 h-4 text-zyvo-primary" />
            Disponible à :
          </div>
          {cities.map(city => (
            <button
              key={city}
              className="whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold glass-premium-light text-zyvo-muted hover:bg-white/10 hover:text-white transition-all"
            >
              {city}
            </button>
          ))}
        </div>
      </section>

      {/* ===== STATS ANIMATED ===== */}
      <section data-section="stats" className="py-12">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${visible.stats ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <AnimatedCounter target="500" suffix="+" label="Prestataires vérifiés" visible={visible.stats} delay={0} />
          <AnimatedCounter target="5000" suffix="+" label="Missions réalisées" visible={visible.stats} delay={0.1} />
          <AnimatedCounter target="49" suffix="" label="Note moyenne /5" visible={visible.stats} delay={0.2} />
          <AnimatedCounter target="24" suffix="/7" label="Support disponible" visible={visible.stats} delay={0.3} />
        </div>
      </section>

      {/* ===== TOP PROVIDERS ===== */}
      <section data-section="providers" className="py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold ${visible.providers ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Meilleurs <span className="gradient-text">pros</span>
            </h2>
            <p className={`text-zyvo-muted mt-2 ${visible.providers ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
              Les prestataires les mieux notés près de chez vous
            </p>
          </div>
          <Link to="/search" className="hidden sm:flex items-center gap-1 text-sm text-zyvo-primary hover:underline">
            Voir tout <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topProviders.map((p, i) => (
            <Link
              key={p.name}
              to="/search"
              className={`group glass-premium rounded-2xl p-5 card-hover animate-scale-in`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-lg font-bold text-white`}>
                  {p.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm text-white truncate">{p.name}</h3>
                  <p className="text-xs text-zyvo-muted truncate">{p.service}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1 font-bold text-amber-400">
                  <Star className="w-3 h-3 fill-amber-400" />{p.rating}
                </span>
                <span className="text-zyvo-muted">({p.reviews} avis)</span>
              </div>

              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-zyvo-muted">À partir de</span>
                <span className="text-sm font-bold text-white">{p.price}</span>
              </div>

              {p.verified && (
                <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-emerald-400">
                  <ShieldCheck className="w-3 h-3" /> Vérifié
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section data-section="services" className="py-16">
        <div className="flex items-center justify-between mb-8">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <Link
              key={s.title}
              to="/search"
              className={`group relative overflow-hidden glass-premium rounded-2xl p-6 card-hover ${s.border} animate-scale-in`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <s.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-base mb-1.5 text-white">{s.title}</h3>
                <p className="text-sm text-zyvo-muted leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs text-zyvo-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Découvrir <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== TRUST ===== */}
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
                { icon: ShieldCheck, title: 'Identité vérifiée', desc: 'Chaque prestataire passe une vérification rigoureuse par notre équipe avant de pouvoir proposer ses services' },
                { icon: Star, title: 'Avis authentiques', desc: 'Tous les avis sont vérifiés. Seuls les clients ayant réellement réservé peuvent laisser un avis' },
                { icon: MessageCircle, title: 'Support WhatsApp 7j/7', desc: 'Notre équipe est disponible 7 jours sur 7 par WhatsApp pour vous assister et répondre à vos questions' },
              ].map((item, i) => (
                <div key={item.title} className={`text-center p-6 animate-scale-in`} style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 gradient-glow">
                    <item.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-zyvo-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section data-section="testimonials" className="py-16">
        <div className="text-center mb-10">
          <h2 className={`text-3xl sm:text-4xl font-extrabold ${visible.testimonials ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Ce qu'ils <span className="gradient-text">disent</span>
          </h2>
          <p className={`text-zyvo-muted mt-2 ${visible.testimonials ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
            Rejoignez des milliers de clients satisfaits
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className={`glass-premium rounded-2xl p-6 card-hover animate-scale-in`} style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-zyvo-muted leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-sm font-bold text-white`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm text-white">{t.name}</div>
                  <div className="text-xs text-zyvo-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section data-section="faq" className="py-16">
        <div className="text-center mb-10">
          <h2 className={`text-3xl sm:text-4xl font-extrabold ${visible.faq ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
          <p className={`text-zyvo-muted mt-2 ${visible.faq ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
            Tout ce que vous devez savoir sur Zyvo
          </p>
        </div>

        <div className={`max-w-2xl mx-auto space-y-3 ${visible.faq ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openFaq === i}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            />
          ))}
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-16">
        <div className="relative overflow-hidden gradient-primary rounded-3xl p-8 sm:p-16 text-center gradient-glow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
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
                className="inline-flex items-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
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
