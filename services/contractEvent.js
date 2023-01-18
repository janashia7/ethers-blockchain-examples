const { ethers } = require('ethers');
require('dotenv').config({ path: '../.env' });

const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
);

const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (int)',

  'event Transfer(address indexed from, address indexed to, uint amount)',
];

const contract = new ethers.Contract(
  process.env.TOKEN_ADDRESS,
  ERC20_ABI,
  provider
);

(async () => {
  const block = await provider.getBlockNumber();

  const transferEvents = await contract.queryFilter('Transfer', block - 10, block);
  console.log({ transferEvents });
})();
