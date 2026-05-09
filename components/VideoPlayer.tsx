import { Video } from '@/types'

export default function VideoPlayer({ video }: { video: Video }) {
  const videoUrl = video.metadata?.video_url
  const videoFile = video.metadata?.video_file?.url
  const thumbnail = video.metadata?.thumbnail?.imgix_url

  // YouTube embed
  if (videoUrl && (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be'))) {
    let embedId = ''
    if (videoUrl.includes('youtube.com/watch?v=')) {
      embedId = videoUrl.split('v=')[1]?.split('&')[0] || ''
    } else if (videoUrl.includes('youtu.be/')) {
      embedId = videoUrl.split('youtu.be/')[1]?.split('?')[0] || ''
    }
    
    if (embedId) {
      return (
        <div className="aspect-video rounded-2xl overflow-hidden glass">
          <iframe
            src={`https://www.youtube.com/embed/${embedId}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )
    }
  }

  // Vimeo embed
  if (videoUrl && videoUrl.includes('vimeo.com')) {
    const vimeoId = videoUrl.split('vimeo.com/')[1]?.split('?')[0]
    if (vimeoId) {
      return (
        <div className="aspect-video rounded-2xl overflow-hidden glass">
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}`}
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      )
    }
  }

  // Direct video file
  if (videoFile) {
    return (
      <div className="aspect-video rounded-2xl overflow-hidden glass">
        <video 
          controls 
          className="w-full h-full"
          poster={thumbnail ? `${thumbnail}?w=1200&h=675&fit=crop&auto=format,compress` : undefined}
        >
          <source src={videoFile} />
          Your browser does not support video playback.
        </video>
      </div>
    )
  }

  // Fallback - show thumbnail with play button
  return (
    <div className="aspect-video rounded-2xl overflow-hidden glass relative bg-gradient-to-br from-neon-pink/20 to-neon-purple/20">
      {thumbnail ? (
        <img 
          src={`${thumbnail}?w=1600&h=900&fit=crop&auto=format,compress`}
          alt={video.title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-8xl">
          🎬
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-neon-pink to-neon-purple flex items-center justify-center text-4xl glow mb-4">
            ▶
          </div>
          <p className="text-gray-300">Video preview unavailable</p>
        </div>
      </div>
    </div>
  )
}