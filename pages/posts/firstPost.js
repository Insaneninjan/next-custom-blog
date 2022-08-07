import Head from "next/head";
import Link from "next/link";

const FirstPost = () => {
  return (
    <div>
      <Head>
        <title>first post</title>
      </Head>
      <h1>first post</h1>
      <Link href="/">
        <a>Back Home</a>
      </Link>
    </div>
  );
};

export default FirstPost;
