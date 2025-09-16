import styles from './video.module.css'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

interface VideoProps {
  videoId: string
  title: string
  band: string
  videoTitle: string
}

export default function Video({
  videoId,
  title,
  band,
  videoTitle,
}: VideoProps) {
  return (
    <div className={styles.video}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.band}>{band}</h3>
      <LiteYouTubeEmbed id={videoId} title={videoTitle} />
    </div>
  )
}
