export default function CategoryCard({ icon: Icon, label, color }) {
  return (
    <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-xl border border-slate-100 shadow-sm transition-all active:scale-95 hover:shadow-md hover:border-slate-200">
      <div className={`p-2.5 rounded-lg ${color}`}>
        <Icon className="w-5 h-5" strokeWidth={1.5} />
      </div>
      <span className="text-xs font-semibold text-slate-600">{label}</span>
    </button>
  )
}
