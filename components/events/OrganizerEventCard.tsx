interface OrganizerEventCardProps {
  title: string
  safeCount: number
  maybeCount: number
  minParticipants: number
  expectedRevenue: string
}

export default function OrganizerEventCard({
  title,
  safeCount,
  maybeCount,
  minParticipants,
  expectedRevenue,
}: OrganizerEventCardProps) {
  const confirmed = safeCount >= minParticipants

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-[#2C2A28]">
            {title}
          </h3>

          <p className="mt-2 text-[#6F6A66]">
            Erwarteter Umsatz: {expectedRevenue}
          </p>
        </div>

        <div
          className={`rounded-2xl px-4 py-2 text-sm ${
            confirmed
              ? 'bg-[#AEB7A3] text-white'
              : 'bg-[#E7D8D4] text-[#2C2A28]'
          }`}
        >
          {confirmed ? 'Bestätigt' : 'Füllt sich'}
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <div className="rounded-2xl bg-[#AEB7A3] px-4 py-2 text-sm text-white">
          {safeCount} SAFE
        </div>

        <div className="rounded-2xl bg-[#F4F1ED] px-4 py-2 text-sm text-[#2C2A28]">
          {maybeCount} MAYBE
        </div>
      </div>
    </div>
  )
}
