import { Link, NavLink } from 'react-router-dom'
import { MapPin, Home, Search, Calendar, Heart, User, Sparkles } from 'lucide-react'
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
    <header className="fixed top-0 left-0 right-0 z-50 glass-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl gradient-primary flex items-center justify-center font-bold text-white text-sm gradient-glow group-hover:scale-110 transition-transform duration-300">
              Z
            </div>
            <span className="text-lg font-extrabold gradient-text">Zyvo</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-zyvo-muted hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-zyvo-muted">
              <MapPin className="w-3.5 h-3.5" />
              Alger
            </div>
            {user ? (
              <Link
                to="/profile"
                className="w-8 h-8 rounded-xl gradient-primary flex items-center justify-center text-xs font-bold text-white"
              >
                {user.name.charAt(0)}
              </Link>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/auth"
                  className="text-sm font-semibold text-zyvo-muted hover:text-white transition-colors px-3 py-2"
                >
                  Connexion
                </Link>
                <Link
                  to="/auth"
                  className="gradient-primary text-white text-sm font-bold px-5 py-2 rounded-xl gradient-glow hover:scale-105 transition-all duration-300"
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
