import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/auth'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import Footer from './components/Footer'
import Home from './pages/Home'
import SearchPage from './pages/Search'
import Bookings from './pages/Bookings'
import Favorites from './pages/Favorites'
import Profile from './pages/Profile'
import Auth from './pages/Auth'

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-zyvo-dark font-sans text-white">
        <div className="mesh-bg">
          <div className="mesh-dot" />
        </div>
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
        <Footer />
        <BottomNav />
      </div>
    </AuthProvider>
  )
}
