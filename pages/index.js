import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import {getPostsData} from "../lib/post";

// get posts data
export async function getStaticProps() {
  const allPostsData = getPostsData();
  // console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}

// context contains user request
// export async function getServerSideProps(context) {
//   return {
//     props: {},
//   };
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm Nao</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>💩 Memo</h2>
        <div className={`${styles.grid}`}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <Image
                  src={`${thumbnail}`}
                  width="950px"
                  height="400px"
                  className={`${styles.thumbnailImage}`}
                ></Image>
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.boldText}>{title}</a>
              </Link>
              <br />
              <p className={`${utilStyles.lightText} ${utilStyles.smallText}`}>
                {date}
              </p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
