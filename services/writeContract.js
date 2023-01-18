const { ethers } = require('ethers');
require('dotenv').config({ path: '../.env' });

const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`
);

const {
  SENDER_ADDRESS,
  RECIPIENT_ADDRESS,
  SENDER_PRIVATE_KEY,
  CONTRACT_ADDRESS,
} = process.env;

const wallet = new ethers.Wallet(SENDER_PRIVATE_KEY, provider);

const ERC20_ABI = [
  'function balanceOf(address) view returns (uint)',
  'function transfer(address to, uint amount) returns (bool)',
];

const contract = new ethers.Contract(CONTRACT_ADDRESS, ERC20_ABI, provider);

(async () => {
  const balance = await contract.balanceOf(SENDER_ADDRESS);

  console.log({
    contractAddress: CONTRACT_ADDRESS,
    balance: ethers.utils.formatEther(balance),
  });

  const contractWithWallet = contract.connect(wallet);

  const tx = await contractWithWallet.transfer(RECIPIENT_ADDRESS, balance);
  await tx.wait();

  console.log(tx);

  const balanceOfSender = await contract.balanceOf(SENDER_ADDRESS);
  const balanceOfReceiver = await contract.balanceOf(RECIPIENT_ADDRESS);

  console.log({
    balanceOfSender: ethers.utils.formatEther(balanceOfSender),
    balanceOfReceiver: ethers.utils.formatEther(balanceOfReceiver),
  });

  
})();
