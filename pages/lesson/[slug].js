import { Fragment } from "react";
import Head from "next/head";
import { getDatabase, getPage, getBlocks } from "../../lib/notion";
import Link from "next/link";
import { databaseId } from "../awardee.js";
import styles from "./post.module.css";
// import Code from "../../components/Code.js";
import Code from "../../components/Code";
import Header from "../../components/Header";
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import Sidebar from "../../components/Sidebar";

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        key={value}
        className={[
          bold ? styles.bold : "",
          code ? styles.code : "",
          italic ? styles.italic : "",
          strikethrough ? styles.strikethrough : "",
          underline ? styles.underline : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p className="my-4">
          <Text text={value.text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text text={value.text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="text-2xl ">
          <Text text={value.text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="text-xl">
          <Text text={value.text} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li>
          <Text text={value.text} />
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption.length ? value.caption[0].plain_text : "";
      return (
        <figure>
          <img src={src} alt={caption} className="rounded-lg" />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <blockquote key={id}>{value.text[0].plain_text}</blockquote>;
    case "code": {
      const properties = value
      let toRender = []
      if (properties.text) {
        const content = properties.text
        const language = properties.language
        toRender.push(
          <pre className="p-4 bg-gray-400 rounded my-4">
            <p className="font-bold ">Example</p>
            <Code code={content[0].plain_text} language={language} />
          </pre>
        )
      }
      return toRender
    }
    case "bookmark": {
      return (
        <a className="bg-blue-400 p-4 my-8 rounded-lg text-white cursor-pointer" href={value.url}>Try it</a>
      )
    }
    case "callout": {
      return (
        <div className="bg-gray-300 my-4 p-4 rounded">
          <p className="font-bold" >Practice</p>
          
          <iframe src={value.text[0].plain_text} width="100%" height="200" frameBorder="0" marginWidth="0" marginHeight="0" ></iframe>
        </div>
      )
    }
    default:
      return `❌ Unsupported block (${type === "unsupported" ? "unsupported by Notion API" : type
        })`;
  }
};

export default function Post({ posts, slug, page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }
  return (
    <div>
      <Head>
        <title>{page.properties.title.rich_text[0].plain_text} | NiceRoom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Sidebar post={posts} slug={slug} />
      <article className={styles.container}>
        <div className="pt-32 pb-12">
          <section>
            {blocks.map((block) => (
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
            <div className="flex mt-12 justify-between">
              {slug !== 'introduction' ? (
                <button className="cursor-pointer text-blue-900" onClick={() => {
                  window.location.href = page.properties.previous.rich_text[0].plain_text
                }}>Previous</button>
              ) : <div></div>}
              <button className="cursor-pointer text-blue-900" onClick={() => {
                window.location.href = page.properties.next.rich_text[0].plain_text
              }}>Next</button>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  console.log(database);
  return {
    paths: database.map((page) => ({ params: { slug: page.properties.slug.rich_text[0].plain_text } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;

  const database = await getDatabase(databaseId);
  const data = database.slice(0)
  console.log(data);
  data.sort(function(a,b){
    return a.properties._id.rich_text[0].plain_text - b.properties._id.rich_text[0].plain_text
  })
  const filter = database.filter((blog) => blog.properties.slug.rich_text[0].plain_text === slug)
  // console.log(filter)
  const page = await getPage(filter[0].id)
  const blocks = await getBlocks(filter[0].id)
  // const page = await getPage(id);
  // const blocks = await getBlocks(id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      posts: data,
      slug: slug,
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};