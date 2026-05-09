// app/videos/[slug]/page.tsx
import { getVideoBySlug, getVideos } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import VideoPlayer from '@/components/VideoPlayer'
import { getMetafieldValue } from '@/types'

export default async function VideoPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const video = await getVideoBySlug(slug)
  
  if (!video) {
    notFound()
  }

  const allVideos = await getVideos()
  const otherVideos = allVideos.filter(v => v.slug !== slug).slice(0, 3)
  
  const description = getMetafieldValue(video.metadata?.description)
  const category = getMetafieldValue(video.metadata?.category)
  const duration = getMetafieldValue(video.metadata?.duration)
  const tags = video.metadata?.tags || []

  return (
    <div className="container mx-auto px-4 py-12">
      <Link 
        href="/" 
        className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
      >
        ← Back to all videos
      </Link>

      <div className="max-w-5xl mx-auto">
        <VideoPlayer video={video} />
        
        <div className="mt-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {category && (
              <span className="px-3 py-1 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full text-sm font-semibold">
                {category}
              </span>
            )}
            {duration && (
              <span className="px-3 py-1 glass rounded-full text-sm">
                ⏱ {duration}
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {video.title}
          </h1>
          
          {description && (
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              {description}
            </p>
          )}

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {otherVideos.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6 gradient-text">More Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherVideos.map(v => {
                const thumb = v.metadata?.thumbnail?.imgix_url
                return (
                  <Link 
                    key={v.id} 
                    href={`/videos/${v.slug}`}
                    className="group block glass rounded-xl overflow-hidden hover:glow transition-all"
                  >
                    {thumb && (
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={`${thumb}?w=600&h=340&fit=crop&auto=format,compress`}
                          alt={v.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-bold group-hover:gradient-text transition-all">
                        {v.title}
                      </h3>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}