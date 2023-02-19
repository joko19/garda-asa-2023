
  
import { Client } from "@notionhq/client";

const notion = new Client({
  // auth: process.env.NOTION_TOKEN,
  auth:'secret_ErEeFjJx8jv5sCozw2aSsyNZSkucE3hNuaABig17PAK'
  // auth:'secret_uMyanwbSCozSGXIw00MXoNkX0T4FBpptZRSKd7cokyE'
});

export const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  console.log(response)
  return response.results;
};

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  return response.results;
};