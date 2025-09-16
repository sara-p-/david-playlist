import styles from './video.module.css'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

interface VideoProps {
  videoId: string
  videoTitle: string
}

export default function Video({ videoId, videoTitle }: VideoProps) {
  return (
    <div className={styles.video}>
      <LiteYouTubeEmbed id={videoId} title={videoTitle} />
    </div>
  )
}
