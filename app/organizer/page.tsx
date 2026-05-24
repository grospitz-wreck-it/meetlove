export default function OrganizerDashboard() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] p-8 text-[#2C2A28]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-semibold">
              Veranstalter Dashboard
            </h1>

            <p className="mt-2 text-[#6F6A66]">
              Überblick über deine Events und Teilnehmer.
            </p>
          </div>

          <button className="rounded-2xl bg-[#2C2A28] px-6 py-4 text-white transition hover:opacity-90">
            Neues Event
          </button>
        </div>

        <section className="grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-[#6F6A66]">
              Aktive Events
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              4
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-[#6F6A66]">
              SAFE Teilnehmer
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-[#AEB7A3]">
              84
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-[#6F6A66]">
              Erwarteter Umsatz
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              2.450€
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-[#6F6A66]">
              Kritische Events
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-[#C27D6C]">
              1
            </h2>
          </div>
        </section>
      </div>
    </main>
  )
}
