import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Einkaufsliste App</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/register">Neue Liste erstellen</Link>
          </li>
          <li>
            <Link href="/join">Liste beitreten</Link>
          </li>
          <li>
            <Link href="/list">Einkaufsliste anzeigen</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
