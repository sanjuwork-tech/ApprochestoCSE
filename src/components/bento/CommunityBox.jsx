import { MessageCircle, Users } from 'lucide-react'

export default function CommunityBox() {
  return (
    <div
      id="community"
      className="min-h-[12rem] bg-white border border-slate-100 rounded-2xl p-6
                 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/60 hover:scale-[1.02]
                 flex flex-col items-start justify-between"
    >
      <div className="p-3 bg-blue-50 rounded-2xl relative">
        <MessageCircle
          className="w-10 h-10 text-brand-blue"
          strokeWidth={1.5}
        />
        <div className="absolute -right-1 -top-1 p-1.5 bg-brand-sage rounded-full">
          <Users className="w-3 h-3 text-white" strokeWidth={1.5} aria-hidden="true" />
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-playfair font-bold text-lg text-slate-800">
          Community
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          Dignified mentorship. Zero toxicity.
        </p>
      </div>
    </div>
  )
}
