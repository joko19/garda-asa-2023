import { getDatabase } from "../lib/notion";
import AwardeePage from "../modules/awadee/AwardeePage";

// export async function getServerSideProps() {
//   const databaseId = "3488edf724c34fadb5462d0ad0c850b3";
//   const database = await getDatabase(databaseId);
//   const res = await fetch("http://localhost:3000/api/hello");
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: {
//       posts: data,
      
//     },
//   };
// }

export const getStaticProps = async () => {
  const db1 = "3488edf724c34fadb5462d0ad0c850b3";
  const db2 = "9525fae1bf01452e8a7fccd0bd0025eb"
  const query1 = await getDatabase(db1);
  const query2 = await getDatabase(db2);
  const rows = query1.map((res) => res.properties)
  const rows2 = query2.map((res) => res.properties)
  const data = [...rows, ...rows2]
  return {
    props: {
      posts: data,
    },
    revalidate: 1,
  };
};

export default AwardeePage;
