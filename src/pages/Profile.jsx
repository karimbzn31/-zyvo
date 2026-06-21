import { User, Settings, Star, LogOut, ChevronRight, ShieldCheck, MessageCircle, LogIn } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/auth'

const menuItems = [
  { icon: User, label: 'Mes informations' },
  { icon: Star, label: 'Mes avis' },
  { icon: Settings, label: 'Paramètres' },
  { icon: MessageCircle, label: 'Support WhatsApp' },
]

export default function Profile() {
  const { user, logout } = useAuth()

  if (!user) {
    return (
      <div className="py-8 lg:py-12 max-w-md mx-auto text-center">
        <div className="w-16 h-16 rounded-2xl glass-premium flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-zyvo-muted" />
        </div>
        <h2 className="text-xl font-extrabold">Connectez-vous</h2>
        <p className="text-sm text-zyvo-muted mt-1">Créez un compte ou connectez-vous</p>
        <Link
          to="/auth"
          className="inline-flex items-center gap-2 gradient-primary text-white font-bold py-3 px-8 rounded-xl gradient-glow hover:scale-105 transition-all duration-300 mt-6"
        >
          <LogIn className="w-4 h-4" />
          Se connecter
        </Link>
      </div>
    )
  }

  return (
    <div className="py-8 max-w-xl">
      <div className="flex flex-col items-center py-6">
        <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-2xl font-bold text-white gradient-glow">
          {user.name.charAt(0)}
        </div>
        <h2 className="text-xl font-extrabold mt-4">{user.name}</h2>
        <p className="text-sm text-zyvo-muted">{user.phone}</p>
        <div className="flex items-center gap-1 mt-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
          <ShieldCheck className="w-3 h-3" /> Compte vérifié
        </div>
      </div>

      <div className="glass-premium rounded-2xl divide-y divide-white/5">
        {menuItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 px-4 py-4 text-left hover:bg-white/5 transition-colors"
          >
            <Icon className="w-4 h-4 text-zyvo-muted" strokeWidth={1.5} />
            <span className="flex-1 text-sm font-semibold text-white">{label}</span>
            <ChevronRight className="w-4 h-4 text-zyvo-muted" strokeWidth={1.5} />
          </button>
        ))}
      </div>

      <button
        onClick={logout}
        className="w-full flex items-center justify-center gap-2 mt-6 text-sm font-bold text-red-400 py-3 hover:bg-red-500/10 rounded-xl transition-colors"
      >
        <LogOut className="w-4 h-4" /> Déconnexion
      </button>
    </div>
  )
}
