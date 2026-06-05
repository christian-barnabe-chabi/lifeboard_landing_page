import { useState } from 'react'

const APP_URL = 'https://app.mylifeboard.app'

interface NavItem {
  label: string
  href?: string
  onClick?: () => void
  active?: boolean
}

interface NavbarProps {
  items: NavItem[]
  sticky?: boolean
}

export function Navbar({ items, sticky = true }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const navClass = sticky
    ? 'fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm'
    : 'bg-white'

  return (
    <>
      <nav className={`${navClass} flex items-center justify-between px-6 md:px-8 py-5 border-b border-gray-100`}>
        <a href="/" className="text-base font-semibold tracking-tight text-[var(--color-primary)]">LifeBoard</a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          {items.map(item => (
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors ${item.active ? 'text-[var(--color-primary)] font-medium' : 'hover:text-[var(--color-primary)]'}`}
              >
                {item.label}
              </a>
            ) : (
              <button
                key={item.label}
                onClick={item.onClick}
                className="hover:text-[var(--color-primary)] transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                {item.label}
              </button>
            )
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={APP_URL}
            className="text-sm font-medium bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Commencer
          </a>
          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
            onClick={() => setOpen(true)}
            aria-label="Menu"
          >
            <span className="block w-5 h-0.5 bg-gray-700" />
            <span className="block w-5 h-0.5 bg-gray-700" />
            <span className="block w-5 h-0.5 bg-gray-700" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          {/* Drawer */}
          <aside className="absolute top-0 left-0 h-full w-72 bg-white flex flex-col shadow-xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="text-base font-semibold tracking-tight text-[var(--color-primary)]">LifeBoard</span>
              <button onClick={() => setOpen(false)} className="p-1 text-gray-400 hover:text-gray-700 cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col py-4">
              {items.map(item => (
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`px-6 py-3 text-sm transition-colors ${item.active ? 'text-[var(--color-primary)] font-medium' : 'text-gray-600 hover:text-[var(--color-primary)]'}`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => { item.onClick?.(); setOpen(false) }}
                    className="px-6 py-3 text-sm text-gray-600 hover:text-[var(--color-primary)] transition-colors text-left cursor-pointer bg-transparent border-none"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </nav>
            <div className="mt-auto px-6 pb-8">
              <a
                href={APP_URL}
                className="block text-center text-sm font-medium bg-[var(--color-primary)] text-white px-4 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                Commencer gratuitement
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}
