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
        <div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center text-3xl font-bold text-slate-300 mx-auto mb-4">
          <User className="w-10 h-10" />
        </div>
        <h2 className="text-xl font-extrabold">Connectez-vous</h2>
        <p className="text-sm text-slate-500 mt-1">Créez un compte ou connectez-vous pour accéder à votre profil</p>
        <Link
          to="/auth"
          className="inline-flex items-center gap-2 gradient-neon text-white font-bold py-3 px-8 rounded-xl text-sm shadow-neon hover:opacity-90 transition-all mt-6"
        >
          <LogIn className="w-4 h-4" />
          Se connecter / S'inscrire
        </Link>
      </div>
    )
  }

  return (
    <div className="py-8 lg:py-12 max-w-xl">
      <div className="flex flex-col items-center py-6">
        <div className="w-20 h-20 rounded-2xl gradient-neon flex items-center justify-center text-3xl font-bold text-white shadow-neon">
          {user.name.charAt(0)}
        </div>
        <h2 className="text-xl font-extrabold mt-4">{user.name}</h2>
        <p className="text-sm text-slate-500">{user.phone}</p>
        <div className="flex items-center gap-1 mt-2 text-xs font-bold text-zyvo-success bg-green-50 px-3 py-1 rounded-full">
          <ShieldCheck className="w-3 h-3" /> Compte vérifié
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-50 divide-y divide-slate-50">
        {menuItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 px-4 py-4 text-left hover:bg-slate-50 transition-colors"
          >
            <Icon className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
            <span className="flex-1 text-sm font-semibold text-zyvo-dark">{label}</span>
            <ChevronRight className="w-4 h-4 text-slate-300" strokeWidth={1.5} />
          </button>
        ))}
      </div>

      <button
        onClick={logout}
        className="w-full flex items-center justify-center gap-2 mt-6 text-sm font-bold text-red-500 py-3 hover:bg-red-50 rounded-xl transition-colors"
      >
        <LogOut className="w-4 h-4" /> Déconnexion
      </button>
    </div>
  )
}
