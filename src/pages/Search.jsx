import { Search, SlidersHorizontal } from 'lucide-react'
import { providers } from '../data/mockData'
import ProviderCard from '../components/ProviderCard'

const filters = ['Tous', 'Maison', 'Réparation', 'Numérique', 'Déménagement', 'Cours', 'Santé']

export default function SearchPage() {
  return (
    <div className="py-8 lg:py-12">
      <h2 className="text-xl sm:text-2xl font-extrabold">Rechercher un service</h2>

      <div className="mt-4 max-w-xl">
        <div className="glass rounded-xl px-4 h-12 flex items-center gap-2">
          <Search className="w-4 h-4 text-zyvo-primary shrink-0" />
          <input
            type="text"
            placeholder="Plombier, coiffeuse, cours..."
            className="w-full bg-transparent outline-none text-sm font-semibold placeholder:text-slate-400"
            autoFocus
          />
          <SlidersHorizontal className="w-4 h-4 text-slate-400 shrink-0" />
        </div>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto scrollbar-hide pb-1">
        {filters.map((f) => (
          <button
            key={f}
            className={`whitespace-nowrap px-5 py-2 rounded-lg text-xs font-bold transition-all ${
              f === 'Tous'
                ? 'gradient-neon text-white shadow-neon'
                : 'bg-white text-slate-500 border border-slate-100 hover:border-slate-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm font-semibold text-slate-400">
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
