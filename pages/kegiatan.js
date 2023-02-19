import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./lesson/[slug].js";
// import styles from "./index.module.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// export const databaseId = process.env.NOTION_DATABASE_ID;
export const databaseId = "c602471a0a7c4d64ad4fa3b11b9e2ac3";

// export const databaseId = '535d3dbfb89c4069bb1d8392e3a03976';

export default function Index({ posts, filter }) {
  // console.log("hello world")
  // console.log(posts[0].properties)
  console.log(posts);
  // console.log(posts[0].properties.image.files[0].file.url);
  return (
    <div>
      <Head>
        <title>Lesson | NiceRoom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="pt-24">
          <h2>All Posts</h2>
          <ul>
            {posts.map((post) => {
              const date = new Date(post.last_edited_time).toLocaleString(
                "en-US",
                {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                }
              );
              // const slug = post.properties.title.rich_text[0].plain_text.toLowerCase()
              // const path = slug.replace(/\s+/g, "-") + "-" + post.id
              return (
                <li key={post.id}>
                  {/* hello world */}

                  <h3>
                    <img
                      src={posts[0].properties.image.files[0].file.url}
                      className="rounded w-32"
                    />
                    {post.properties.Name.title[0].plain_text}
                    {/* <Link href={`/lesson/${post.properties.slug.rich_text[0].plain_text}`}>

                   

                    </Link> */}
                  </h3>

                  <p >{date}</p>
                  <Link href={`/${post.id}`}>
                    <a> Read post →</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  // const filter = database.filter((blog) => blog.properties.slug.rich_text[0].plain_text === 'percabangan')
  // console.log(database)
  return {
    props: {
      posts: database,
      // filter: filter
    },
    revalidate: 1,
  };
};
