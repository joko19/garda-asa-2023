import { getDatabase } from "../lib/notion";
import AwardeePage from "../modules/awadee/AwardeePage";

export const getStaticProps = async () => {
  const databaseId = "3488edf724c34fadb5462d0ad0c850b3";
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};

export default AwardeePage;
