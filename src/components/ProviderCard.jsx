import { Star, ShieldCheck } from 'lucide-react'

export default function ProviderCard({ provider }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-50 flex items-center gap-4 transition-all hover:shadow-md active:scale-[0.98]">
      <div className="w-12 h-12 rounded-xl gradient-neon flex items-center justify-center text-base font-bold text-white shrink-0 shadow-neon/50">
        {provider.name.charAt(0)}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-sm text-zyvo-dark truncate">{provider.name}</h4>
        <p className="text-xs text-slate-500 mt-0.5">{provider.service}</p>
        <div className="flex items-center gap-3 mt-1.5">
          {provider.badges.includes('Vérifié') && (
            <span className="flex items-center gap-1 text-[10px] font-bold text-zyvo-success">
              <ShieldCheck className="w-3 h-3" /> Vérifié
            </span>
          )}
          <span className="flex items-center gap-1 text-[10px] font-bold text-amber-500">
            <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
            {provider.rating}
          </span>
          <span className="text-[10px] text-slate-400">{provider.missions} missions</span>
        </div>
      </div>
      <div className="text-right shrink-0">
        <span className="text-[10px] text-slate-400">Dès</span>
        <p className="text-sm font-bold text-zyvo-dark">{provider.price}</p>
      </div>
    </div>
  )
}
