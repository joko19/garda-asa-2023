// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { APIErrorCode, Client } from "@notionhq/client";

const notion = new Client({
  auth: "secret_ErEeFjJx8jv5sCozw2aSsyNZSkucE3hNuaABig17PAK",
});

export default async function handler(req, res) {
  console.log(notion);
  const databaseId = "3488edf724c34fadb5462d0ad0c850b3";
  
  const query = await notion.databases.query({
    database_id: databaseId,
  });
  const rows = query.results.map((res) => res.properties)
  try {
    const query = await notion.databases.query({
      database_id: databaseId,
    });
    const rows = query.results.map((res) => res.properties)
    console.log(myPage);
    // for response
    // res.status(200).json(JSON.stringify(rows));
    // for development
    res.status(200).json({name :" ee"});
  } catch (error) {
    if (error.code === APIErrorCode.ObjectNotFound) {
      //
      // For example: handle by asking the user to select a different database
      //
      res.status(200).json({name :" erroe"});
    } else {
      // Other error handling code
      console.error(error); 
      res.status(200).json({name :" error"});
      // res.status(400).json(error);
    }
  }
}
