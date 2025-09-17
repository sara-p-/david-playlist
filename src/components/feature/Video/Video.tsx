import styles from './Video.module.css'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

interface VideoProps {
  videoId: string
  videoTitle: string
  band: string
  title: string
}

export default function Video({
  videoId,
  videoTitle,
  band,
  title,
}: VideoProps) {
  return (
    <div className={styles.video}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.band}>{band}</h3>
      </div>
      <LiteYouTubeEmbed id={videoId} title={videoTitle} />
    </div>
  )
}
