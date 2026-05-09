import { createBucketClient } from '@cosmicjs/sdk'
import { Video, hasStatus } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

export async function getVideos(): Promise<Video[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'videos' })
      .props(['id', 'title', 'slug', 'metadata', 'thumbnail', 'created_at'])
      .depth(1)
    
    return response.objects as Video[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    return []
  }
}

export async function getVideoBySlug(slug: string): Promise<Video | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'videos', slug })
      .depth(1)
    
    return response.object as Video
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    return null
  }
}

export async function getFeaturedVideo(): Promise<Video | null> {
  try {
    const videos = await getVideos()
    const featured = videos.find(v => v.metadata?.featured === true)
    return featured || videos[0] || null
  } catch {
    return null
  }
}