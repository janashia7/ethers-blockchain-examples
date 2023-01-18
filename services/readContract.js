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
];

const contract = new ethers.Contract(
  process.env.TOKEN_ADDRESS,
  ERC20_ABI,
  provider
);

(async () => {
  const name = await contract.name();
  const contractSymbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();
  const balance = await contract.balanceOf(process.env.WALLET_ADDRESS);

  console.log({
    name,
    symbol: contractSymbol,
    totalSupply: ethers.utils.formatEther(totalSupply),
    balance: ethers.utils.formatEther(balance),
  });
})();
