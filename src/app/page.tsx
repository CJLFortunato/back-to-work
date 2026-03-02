import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello world!</h1>
        <Link href="/login">Log In</Link>
        <Link href="/register">Register</Link>
      </main>
    </div>
  );
}