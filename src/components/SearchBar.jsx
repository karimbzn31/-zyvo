import { Search } from 'lucide-react'

export default function SearchBar() {
  return (
    <div className="relative">
      <div className="absolute inset-0 gradient-neon rounded-xl blur-md opacity-20"></div>
      <div className="relative bg-white rounded-xl p-4 shadow-glass border border-white/50">
        <input
          type="text"
          placeholder="Quel service recherchez-vous ?"
          className="w-full bg-transparent outline-none text-sm font-semibold placeholder:text-slate-400"
        />
        <div className="h-px bg-slate-100 my-3" />
        <button className="w-full gradient-neon text-white font-bold py-2.5 rounded-lg text-sm shadow-neon transition-transform active:scale-[0.98]">
          Rechercher
        </button>
      </div>
    </div>
  )
}
