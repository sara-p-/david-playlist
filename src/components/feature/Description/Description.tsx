import styles from './Description.module.css'

interface DescriptionProps {
  children: React.ReactNode
}

export default function Description({ children }: DescriptionProps) {
  return <div className={styles.description}>{children}</div>
}
