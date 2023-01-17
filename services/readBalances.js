const { ethers } = require('ethers');
require('dotenv').config({ path: '../.env' });

const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
);

(async () => {
  const balance = await provider.getBalance(process.env.WALLET_ADDRESS);
  console.log(
    `\nETH Balance of ${process.env.WALLET_ADDRESS} --> ${ethers.utils.formatEther(balance)} ETH\n`
  );
})();
