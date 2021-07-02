import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jordan Liu</title>
        <meta
          name="description"
          content="Full Stack Developer based in Kington, Jamaica"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Jordan Liu</h1>

        <p className={styles.description}>Software Developer</p>

        <div className={styles.cta}>
          <a href="https://github.com/jordanliu">GitHub</a> |{" "}
          <a href="https://twitter.com/jordanxliu">Twitter</a> |{" "}
          <a href="https://www.linkedin.com/in/jordanxliu/">LinkedIn</a> |{" "}
          <a href="mailto:jordanxavierliu@gmail.com">Email</a>
        </div>
      </main>
    </div>
  );
}
