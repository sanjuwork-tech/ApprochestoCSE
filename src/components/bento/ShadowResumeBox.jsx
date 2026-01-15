import { Shield, PenLine, Mic, MessageSquareText } from 'lucide-react'

const badges = [
  {
    label: 'Ethics & Policy',
    className: 'bg-blue-100 text-blue-700',
    Icon: Shield,
  },
  {
    label: 'Answer Writing',
    className: 'bg-green-100 text-green-700',
    Icon: PenLine,
  },
  {
    label: 'Interview Prep',
    className: 'bg-purple-100 text-purple-700',
    Icon: Mic,
  },
  {
    label: 'Communication',
    className: 'bg-orange-100 text-orange-700',
    Icon: MessageSquareText,
  },
]

export default function ShadowResumeBox() {
  return (
    <div
      id="career"
      className="col-span-1 md:col-span-2 bg-white border border-slate-100 rounded-2xl p-6
                 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/60"
    >
      <h3 className="font-playfair font-bold text-xl text-slate-800">
        The Shadow Resume
      </h3>
      <p className="mt-2 text-slate-600">
        Your UPSC skills transform into corporate superpowers.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {badges.map(({ label, className, Icon }) => (
          <span
            key={label}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${className}`}
          >
            <Icon className="w-4 h-4" strokeWidth={1.5} />
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
