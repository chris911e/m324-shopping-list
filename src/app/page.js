import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Willkommen zur Einkaufsliste App</h1>
        <p>Teilen Sie Ihre Einkaufsliste einfach und unkompliziert mit Ihrer Familie oder WG!</p>
      </header>

      <main className={styles.main}>
        <div className={styles.buttons}>
          <Link href="/register" className={styles.button}>
            Neue Einkaufsliste erstellen
          </Link>
          <Link href="/join" className={styles.button}>
            Einer Einkaufsliste beitreten
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Organisieren Sie Ihre Einkäufe zusammen - schnell, einfach und übersichtlich.</p>
      </footer>
    </div>
  )
}
