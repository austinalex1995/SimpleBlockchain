const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(data){
    this.height = '';
    this.timeStamp = '';
    this.body = data;
    this.previousHash = '0x';
    this.hash = '';
  }
}

class Blockchain{
    constructor(){
      // new chain array
      this.chain = [];
      this.addBlock(this.createGenesisBlock());
  }
  
  // create the first block on the chain
  createGenesisBlock(){
    return new Block("First block in the chain - Genesis block");
  }
  
  // Get the latest block on the chain
  getLatestBlock(){
    return this.chain[this.chain.length -1];
  }

  // addBlock method
  addBlock(newBlock){
     // block height
    newBlock.height = this.chain.length;
    // UTC timestamp
    newBlock.timeStamp = new Date().getTime().toString().slice(0,-3);
    if (this.chain.length>0) {
      // previous block hash
      newBlock.previousHash = this.getLatestBlock().hash;
    }
    // SHA256 requires a string of data
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    console.log(JSON.stringify(newBlock));
    // add block to chain
    this.chain.push(newBlock);
  }
}