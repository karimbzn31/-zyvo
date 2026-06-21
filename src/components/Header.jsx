import { Link, NavLink } from 'react-router-dom'
import { MapPin, Home, Search, Calendar, Heart, User } from 'lucide-react'
import { useAuth } from '../context/auth'

const navLinks = [
  { to: '/', icon: Home, label: 'Accueil' },
  { to: '/search', icon: Search, label: 'Recherche' },
  { to: '/bookings', icon: Calendar, label: 'Réservations' },
  { to: '/favorites', icon: Heart, label: 'Favoris' },
  { to: '/profile', icon: User, label: 'Profil' },
]

export default function Header() {
  const { user } = useAuth()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-neon flex items-center justify-center font-bold text-white text-sm shadow-neon">
              Z
            </div>
            <span className="text-lg font-extrabold text-gradient">Zyvo</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-zyvo-primary/5 text-zyvo-primary'
                      : 'text-slate-500 hover:text-zyvo-primary hover:bg-slate-50'
                  }`
                }
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-slate-400">
              <MapPin className="w-3.5 h-3.5" />
              Alger
            </div>
            {user ? (
              <Link
                to="/profile"
                className="w-8 h-8 rounded-lg gradient-neon flex items-center justify-center text-xs font-bold text-white"
              >
                {user.name.charAt(0)}
              </Link>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/auth"
                  className="text-sm font-semibold text-slate-600 hover:text-zyvo-dark transition-colors px-3 py-2"
                >
                  Connexion
                </Link>
                <Link
                  to="/auth"
                  className="gradient-neon text-white text-sm font-bold px-4 py-2 rounded-lg shadow-neon hover:opacity-90 transition-all"
                >
                  Inscription
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
