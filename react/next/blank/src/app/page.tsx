import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.wrap}>
        <a href="#" target="_blank">
          <img
            src="https://cdn.svgporn.com/logos/css-3.svg"
            alt="css logo"
            className={styles.logo}
          />
        </a>
        <h1 className={styles.title}>React + Next.js + CSS3</h1>
        <p className={styles.description}>
          Powered by{' '}
          <a href="https://runow.dev" target="_blank">
            Runow
          </a>
        </p>
      </div>
    </div>
  );
}
