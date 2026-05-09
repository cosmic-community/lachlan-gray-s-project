import Link from 'next/link'
import { Video, getMetafieldValue } from '@/types'

export default function HeroSection({ featured }: { featured: Video | null }) {
  if (!featured) {
    return (
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-neon-purple/20 to-neon-blue/20 animate-gradient" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6 gradient-text">
            AI Video Showcase
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stunning AI-generated content. The future of video, today.
          </p>
        </div>
      </section>
    )
  }

  const thumbnail = featured.metadata?.thumbnail?.imgix_url
  const description = getMetafieldValue(featured.metadata?.description)
  const category = getMetafieldValue(featured.metadata?.category)

  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      {thumbnail && (
        <div className="absolute inset-0">
          <img 
            src={`${thumbnail}?w=2400&h=1600&fit=crop&auto=format,compress`}
            alt={featured.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-transparent to-neon-purple/10 animate-pulse-slow" />
      
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl">
          {category && (
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full text-sm font-bold mb-6 glow">
              ⭐ FEATURED · {category.toUpperCase()}
            </div>
          )}
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="gradient-text">{featured.title}</span>
          </h1>
          
          {description && (
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {description}
            </p>
          )}
          
          <Link 
            href={`/videos/${featured.slug}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full text-lg font-bold hover:scale-105 transition-transform glow"
          >
            ▶ Watch Now
          </Link>
        </div>
      </div>
    </section>
  )
}