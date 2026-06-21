import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Phone, User, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import { useAuth } from '../context/auth'

export default function Auth() {
  const [mode, setMode] = useState('login')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [step, setStep] = useState(1)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      login(phone)
      navigate('/profile')
    }
  }

  return (
    <div className="py-8 max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-2xl font-bold text-white gradient-glow mx-auto mb-4">
          <Sparkles className="w-7 h-7" />
        </div>
        <h1 className="text-2xl font-extrabold">
          {mode === 'register' ? 'Créer un compte' : 'Connexion'}
        </h1>
        <p className="text-sm text-zyvo-muted mt-1">
          {mode === 'register' ? 'Rejoignez la communauté Zyvo' : 'Retrouvez votre compte Zyvo'}
        </p>
      </div>

      <div className="flex glass-premium rounded-xl p-1 mb-6">
        <button
          onClick={() => { setMode('login'); setStep(1) }}
          className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${
            mode === 'login' ? 'bg-white/10 text-white shadow-sm' : 'text-zyvo-muted'
          }`}
        >
          Se connecter
        </button>
        <button
          onClick={() => { setMode('register'); setStep(1) }}
          className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${
            mode === 'register' ? 'bg-white/10 text-white shadow-sm' : 'text-zyvo-muted'
          }`}
        >
          S'inscrire
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 ? (
          <>
            {mode === 'register' && (
              <div>
                <label className="text-xs font-bold text-zyvo-muted mb-1.5 block">Nom complet</label>
                <div className="flex items-center gap-2 glass-premium rounded-xl px-4 h-12">
                  <User className="w-4 h-4 text-zyvo-muted" strokeWidth={1.5} />
                  <input
                    type="text"
                    placeholder="Votre nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent outline-none text-sm font-semibold placeholder:text-zyvo-muted text-white"
                    required
                  />
                </div>
              </div>
            )}
            <div>
              <label className="text-xs font-bold text-zyvo-muted mb-1.5 block">Numéro de téléphone</label>
              <div className="flex items-center gap-2 glass-premium rounded-xl px-4 h-12">
                <Phone className="w-4 h-4 text-zyvo-muted" strokeWidth={1.5} />
                <span className="text-sm font-bold text-zyvo-muted">+213</span>
                <input
                  type="tel"
                  placeholder="5XX XX XX XX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-sm font-semibold placeholder:text-zyvo-muted text-white"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full gradient-primary text-white font-bold py-3 rounded-xl gradient-glow hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              {mode === 'register' ? 'Créer mon compte' : 'Se connecter'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="font-bold text-lg">Code de vérification</h3>
            <p className="text-sm text-zyvo-muted mt-1">
              Un code SMS a été envoyé au <strong className="text-white">+213 {phone}</strong>
            </p>
            <div className="flex gap-3 justify-center mt-6">
              {[0, 1, 2, 3].map((i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  className="w-12 h-14 text-center text-lg font-bold glass-premium rounded-xl outline-none focus:border-zyvo-primary/50 focus:bg-white/10 text-white transition-all"
                />
              ))}
            </div>
            <button
              type="submit"
              className="w-full gradient-primary text-white font-bold py-3 rounded-xl gradient-glow hover:scale-[1.02] transition-all duration-300 mt-6"
            >
              Vérifier mon compte
            </button>
            <p className="text-xs text-zyvo-muted mt-4">
              Vous n'avez pas reçu le code ?{' '}
              <button type="button" className="text-zyvo-primary font-bold">Renvoyer</button>
            </p>
          </div>
        )}
      </form>

      <p className="text-center text-xs text-zyvo-muted mt-6">
        En continuant, vous acceptez les{' '}
        <a href="#" className="text-zyvo-primary font-bold">Conditions d'utilisation</a>
      </p>
    </div>
  )
}
