import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";

const name = "michael";
export const siteTitle = "Blog";

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              src="/images/steve.jpeg"
              alt="icon"
              width="60px"
              height="60px"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Image
              className={`${utilStyles.borderCircle}`}
              src="/images/steve.jpeg"
              alt="icon"
              width="60px"
              height="60px"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">⇐Back Home</Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
