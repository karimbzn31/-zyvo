import { Heart } from 'lucide-react'
import { providers } from '../data/mockData'
import ProviderCard from '../components/ProviderCard'

export default function Favorites() {
  const favorites = providers.slice(0, 2)

  return (
    <div className="py-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold">Mes favoris</h2>

      {favorites.length === 0 ? (
        <div className="text-center py-16">
          <Heart className="w-12 h-12 text-zyvo-muted/30 mx-auto mb-3" />
          <p className="text-sm font-bold text-white">Aucun favori</p>
          <p className="text-xs text-zyvo-muted mt-1">Ajoutez des prestataires à vos favoris</p>
        </div>
      ) : (
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((p) => (
            <ProviderCard key={p.id} provider={p} />
          ))}
        </div>
      )}
    </div>
  )
}
