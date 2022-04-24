import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x27D3C1A31cD51E75ac5C4553E4969DaA974c28A7");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Cat",
        description: "This NFT will give you access to DAO!",
        image: readFileSync("scripts/assets/1.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();//在drop里面设置具体的nft