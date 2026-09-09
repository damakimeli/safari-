export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="horizon-line mb-8" />
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div>
            <p className="text-base text-white">Dusty Roads</p>
            <p className="coord-label mt-2">S 2°31&apos; E 34°45&apos;</p>
          </div>
          <div className="flex gap-8 text-sm text-neutral-400">
            <a href="/contact" className="hover:text-white">Contact</a>
            <a href="/about" className="hover:text-white">About</a>
            <a href="/booking" className="hover:text-white">Book a journey</a>
          </div>
        </div>
        <p className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} Dusty Roads Safari Camp.</p>
      </div>
    </footer>
  );
}