import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <nav className="rounded-full border border-stone-800 bg-stone-950/80 px-4 py-3 shadow-lg shadow-stone-950/20 backdrop-blur sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <a
            className="brand-glow text-sm font-semibold tracking-[0.18em] text-stone-100"
            href="#top"
            onClick={() => setIsOpen(false)}
          >
            <span className="italic">rjw</span>Consulting
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-stone-700 px-4 py-2 text-sm font-medium text-stone-100 transition hover:border-stone-500 hover:bg-stone-900 md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="site-navigation"
          >
            Menu
          </button>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="rounded-full px-4 py-2 text-sm text-stone-300 transition hover:bg-stone-900 hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {isOpen ? (
          <div
            id="site-navigation"
            className="mt-4 flex flex-col gap-2 border-t border-stone-800 pt-4 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                className="rounded-2xl px-4 py-3 text-sm text-stone-300 transition hover:bg-stone-900 hover:text-white"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  )
}

export default Navbar
