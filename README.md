# NFT_Generator
JavaScript tool to generate your own Solana metadata.
PhotoShop script to render layers from metadata.

## MetaData Generator

1/ From the root folder, run `npm install` to install the dependencies.

1/ In metaDataGenerator folder, fill in the template.json with your collection information.

2/ Fill in the attributes.json with the attributes of your NFTs.
Follow the format from the following example including the rarity (a float between 0 and 1):

{
  "trait_type": [
    {
      "value": "value1",
      "rarity": 0.1
    },
    {
      "value": "value2",
      "rarity": 0.2
    },
    {
      "value": "value3",
      "rarity": 0.3
    },
    {
      "value": "value4",
      "rarity": 0.4
    }
  ]
}

2/ run `cd metaDataGenerator` then `node index.js` to launch the generation.
You metadata files will be created in the metaDataGenerator/assets folder.

## PhotoShop script

1/ In the photoShopGenerator folder, in index.js, update the variable `var NFT_NUMBER = 100` with the number of NFTs in your collection.

2/ You can add custom conditions to show layers in the `generateImage` function, from line 160.

2/ Still in the photoShopGenerator folder, create a PhotoShop file with unique layernames that corresponds to trait type of values.

3/ Move the assets folder generated previously, in the photoShopGenerator folder.

4/ Open the photoShop file.

5/ in File/Scripts/Browse select the index.js file in photoShopGenerator to launch the script. 
The png images will be generated in the assets folder.

# Related video tutorials:
Your NFT metadata with JavaScript - Metaplex Candy Machine's format:
https://youtu.be/I0yVGH_nM4k

Your NFT from Photoshop - Script in JS with Action reference:
https://youtu.be/f5uXy4GN3qU
