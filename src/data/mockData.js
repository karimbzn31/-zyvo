import { Home, Wrench, Monitor, Truck, GraduationCap, HeartPulse } from 'lucide-react'

export const categories = [
  { id: 1, icon: Home, label: 'Maison', color: 'bg-blue-50 text-zyvo-primary' },
  { id: 2, icon: Wrench, label: 'Réparation', color: 'bg-purple-50 text-zyvo-accent' },
  { id: 3, icon: Monitor, label: 'Numérique', color: 'bg-cyan-50 text-zyvo-neon' },
  { id: 4, icon: Truck, label: 'Déménagement', color: 'bg-amber-50 text-zyvo-warning' },
  { id: 5, icon: GraduationCap, label: 'Cours', color: 'bg-green-50 text-zyvo-success' },
  { id: 6, icon: HeartPulse, label: 'Santé', color: 'bg-red-50 text-red-500' },
]

export const providers = [
  {
    id: 1,
    name: 'Karim B.',
    service: 'Plombier Certifié',
    rating: 4.9,
    missions: 120,
    badges: ['Vérifié', 'Top'],
    price: '1 500 DA/h',
  },
  {
    id: 2,
    name: 'Amina K.',
    service: 'Aide à domicile',
    rating: 5.0,
    missions: 85,
    badges: ['Vérifié', 'Recommandé'],
    price: '1 200 DA/h',
  },
  {
    id: 3,
    name: 'Mohamed L.',
    service: 'Électricien',
    rating: 4.8,
    missions: 64,
    badges: ['Vérifié'],
    price: '1 800 DA/h',
  },
  {
    id: 4,
    name: 'Sara B.',
    service: 'Coiffeuse à domicile',
    rating: 4.9,
    missions: 42,
    badges: ['Vérifié', 'Top'],
    price: '2 000 DA/séance',
  },
]

export const bookings = [
  {
    id: 1,
    provider: providers[0],
    date: '25 juin 2026',
    time: '14:00',
    status: 'Confirmée',
    statusColor: 'text-zyvo-success',
  },
  {
    id: 2,
    provider: providers[1],
    date: '28 juin 2026',
    time: '09:00',
    status: 'En attente',
    statusColor: 'text-zyvo-warning',
  },
]
