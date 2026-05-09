import Link from 'next/link'
import { Video, getMetafieldValue } from '@/types'

export default function VideoGrid({ videos }: { videos: Video[] }) {
  if (!videos || videos.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map(video => {
        const thumbnail = video.metadata?.thumbnail?.imgix_url
        const category = getMetafieldValue(video.metadata?.category)
        const duration = getMetafieldValue(video.metadata?.duration)
        const description = getMetafieldValue(video.metadata?.description)
        
        return (
          <Link 
            key={video.id} 
            href={`/videos/${video.slug}`}
            className="group block glass rounded-2xl overflow-hidden hover:glow transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-neon-pink/20 to-neon-purple/20">
              {thumbnail ? (
                <img 
                  src={`${thumbnail}?w=800&h=450&fit=crop&auto=format,compress`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  🎬
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple flex items-center justify-center text-2xl glow">
                  ▶
                </div>
              </div>
              
              {duration && (
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur rounded text-xs font-medium">
                  {duration}
                </div>
              )}
              
              {category && (
                <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full text-xs font-bold">
                  {category}
                </div>
              )}
            </div>
            
            <div className="p-5">
              <h3 className="text-lg font-bold mb-2 group-hover:gradient-text transition-all line-clamp-2">
                {video.title}
              </h3>
              {description && (
                <p className="text-sm text-gray-400 line-clamp-2">
                  {description}
                </p>
              )}
            </div>
          </Link>
        )
      })}
    </div>
  )
}