import { Star, ShieldCheck } from 'lucide-react'

export default function ProviderCard({ provider }) {
  return (
    <div className="glass-premium rounded-2xl p-4 flex items-center gap-4 card-hover">
      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-base font-bold text-white shrink-0 gradient-glow">
        {provider.name.charAt(0)}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-sm text-white truncate">{provider.name}</h4>
        <p className="text-xs text-zyvo-muted mt-0.5">{provider.service}</p>
        <div className="flex items-center gap-3 mt-1.5">
          {provider.badges.includes('Vérifié') && (
            <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400">
              <ShieldCheck className="w-3 h-3" /> Vérifié
            </span>
          )}
          <span className="flex items-center gap-1 text-[10px] font-bold text-amber-400">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            {provider.rating}
          </span>
          <span className="text-[10px] text-zyvo-muted">{provider.missions} missions</span>
        </div>
      </div>
      <div className="text-right shrink-0">
        <span className="text-[10px] text-zyvo-muted">Dès</span>
        <p className="text-sm font-bold text-white">{provider.price}</p>
      </div>
    </div>
  )
}
