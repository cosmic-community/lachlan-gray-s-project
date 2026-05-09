import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 glass border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🔥</span>
          <span className="text-xl font-bold gradient-text">
            Lachlan Gray
          </span>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link 
            href="/" 
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Home
          </Link>
          <Link 
            href="/" 
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Videos
          </Link>
        </nav>
      </div>
    </header>
  )
}