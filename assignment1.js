// Step 1: Create a variable to hold your NFTs
let nfts = [];

// Step 2: This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, description, owner) {
    const nft = {
        name: name,
        description: description,
        owner: owner
    };
    nfts.push(nft);
}

// Step 3: Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log(`Name: ${nfts[i].name}`);
        console.log(`Description: ${nfts[i].description}`);
        console.log(`Owner: ${nfts[i].owner}`);
        console.log('-------------------');
    }
}

// Step 4: Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// Call your functions below this line
mintNFT("NFT1", "This is the first NFT", "Alice");
mintNFT("NFT2", "This is the second NFT", "Bob");
mintNFT("NFT3", "This is the third NFT", "Charlie");

listNFTs();
console.log(`Total Supply: ${getTotalSupply()}`);
