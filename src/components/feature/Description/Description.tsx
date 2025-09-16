import styles from './description.module.css'

interface DescriptionProps {
  songTitle: string
  band: string
  children: React.ReactNode
}

export default function Description({
  songTitle,
  band,
  children,
}: DescriptionProps) {
  return (
    <div className={styles.description}>
      <h2 className={styles.songTitle}>{songTitle}</h2>
      <h3 className={styles.band}>{band}</h3>
      {children}
    </div>
  )
}
