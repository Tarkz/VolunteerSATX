export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-[#1e3a5f] text-blue-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-bold text-white">VolunteerSATX</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed">
              A concept mockup for modernizing San Antonio&apos;s volunteer hub.
              Not affiliated with United Way or volunteersanantonio.org.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-white">San Antonio, TX</p>
            <p className="mt-1">Bexar County</p>
          </div>
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-xs text-blue-200/70">
          Concept mockup for portfolio preview — placeholder content only.
        </p>
      </div>
    </footer>
  );
}
