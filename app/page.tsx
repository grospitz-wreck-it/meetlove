export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#2C2A28]">
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        <div className="mb-6 rounded-full bg-[#E7D8D4] px-4 py-2 text-sm text-[#2C2A28] shadow-sm">
          Real people. Real events. Real intentions.
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          Meet people in real life — not endless chats.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6F6A66]">
          Meetlove verbindet Singles über echte Events.
          Transparent, respektvoll und verbindlich.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-2xl bg-[#2C2A28] px-8 py-4 text-white transition hover:opacity-90">
            Events entdecken
          </button>

          <button className="rounded-2xl border border-[#D8CBBE] bg-white px-8 py-4 text-[#2C2A28] transition hover:bg-[#F4F1ED]">
            Veranstalter werden
          </button>
        </div>
      </section>
    </main>
  )
}
