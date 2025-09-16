import styles from './container.module.css'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  )
}
