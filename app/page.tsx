import { getVideos, getFeaturedVideo } from '@/lib/cosmic'
import HeroSection from '@/components/HeroSection'
import VideoGrid from '@/components/VideoGrid'

export default async function HomePage() {
  const videos = await getVideos()
  const featured = await getFeaturedVideo()

  return (
    <div>
      <HeroSection featured={featured} />
      
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">All Videos</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Explore our collection of stunning AI-generated content
          </p>
        </div>
        
        {videos.length > 0 ? (
          <VideoGrid videos={videos} />
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-2xl font-bold mb-2">No videos yet</h3>
            <p className="text-gray-400">
              Add some videos to your Cosmic bucket to see them here.
            </p>
          </div>
        )}
      </section>
    </div>
  )
}