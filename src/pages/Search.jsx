import { Search, SlidersHorizontal } from 'lucide-react'
import { providers } from '../data/mockData'
import ProviderCard from '../components/ProviderCard'

const filters = ['Tous', 'Maison', 'Réparation', 'Numérique', 'Déménagement', 'Cours', 'Santé']

export default function SearchPage() {
  return (
    <div className="py-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold">Rechercher</h2>

      <div className="mt-4 glass-premium rounded-2xl px-5 h-12 flex items-center gap-3">
        <Search className="w-4 h-4 text-zyvo-primary shrink-0" />
        <input
          type="text"
          placeholder="Plombier, coiffeuse, cours..."
          className="w-full bg-transparent outline-none text-sm font-semibold placeholder:text-zyvo-muted"
          autoFocus
        />
        <SlidersHorizontal className="w-4 h-4 text-zyvo-muted shrink-0" />
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto scrollbar-hide pb-1">
        {filters.map((f) => (
          <button
            key={f}
            className={`whitespace-nowrap px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              f === 'Tous'
                ? 'gradient-primary text-white'
                : 'glass-premium-light text-zyvo-muted hover:text-white'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm font-semibold text-zyvo-muted">
        {providers.length} prestataires disponibles
      </p>

      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {providers.map((p) => (
          <ProviderCard key={p.id} provider={p} />
        ))}
      </div>
    </div>
  )
}
