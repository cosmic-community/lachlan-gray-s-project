export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p className="mb-2">
          <span className="gradient-text font-bold">Lachlan Gray's Project</span>
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} - AI Video Showcase
        </p>
      </div>
    </footer>
  )
}