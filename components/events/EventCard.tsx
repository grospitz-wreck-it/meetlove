interface EventCardProps {
  title: string
  location: string
  date: string
  safeCount: number
  maybeCount: number
}

export default function EventCard({
  title,
  location,
  date,
  safeCount,
  maybeCount,
}: EventCardProps) {
  return (
    <div className="rounded-3xl border border-[#E7D8D4] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-[#F4F1ED] px-3 py-1 text-sm text-[#6F6A66]">
          {location}
        </span>

        <span className="text-sm text-[#6F6A66]">
          {date}
        </span>
      </div>

      <h3 className="text-2xl font-semibold text-[#2C2A28]">
        {title}
      </h3>

      <div className="mt-6 flex gap-3">
        <div className="rounded-2xl bg-[#AEB7A3] px-4 py-2 text-sm text-white">
          {safeCount} safe
        </div>

        <div className="rounded-2xl bg-[#E7D8D4] px-4 py-2 text-sm text-[#2C2A28]">
          {maybeCount} maybe
        </div>
      </div>
    </div>
  )
}
