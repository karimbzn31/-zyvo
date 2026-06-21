import { Calendar, Clock, MapPin } from 'lucide-react'
import { bookings } from '../data/mockData'

export default function Bookings() {
  return (
    <div className="py-8">
      <h2 className="text-2xl sm:text-3xl font-extrabold">Mes réservations</h2>

      {bookings.length === 0 ? (
        <div className="text-center py-16">
          <Calendar className="w-12 h-12 text-zyvo-muted/30 mx-auto mb-3" />
          <p className="text-sm font-bold text-white">Aucune réservation</p>
          <p className="text-xs text-zyvo-muted mt-1">Recherchez un service et réservez dès maintenant</p>
        </div>
      ) : (
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookings.map((b) => (
            <div key={b.id} className="glass-premium rounded-2xl p-4 card-hover">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-sm font-bold text-white">
                  {b.provider.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm">{b.provider.name}</h4>
                    <span className={`text-[10px] font-bold ${b.statusColor}`}>{b.status}</span>
                  </div>
                  <p className="text-xs text-zyvo-muted mt-0.5">{b.provider.service}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/5 text-xs text-zyvo-muted">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{b.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{b.time}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />Alger</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
