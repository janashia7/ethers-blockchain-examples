const { ethers } = require('ethers');
require('dotenv').config({ path: '../.env' });

const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`
);

const { SENDER_ADDRESS, RECIPIENT_ADDRESS, SENDER_PRIVATE_KEY } = process.env;

const wallet = new ethers.Wallet(SENDER_PRIVATE_KEY, provider);
(async () => {
  const senderBalanceBefore = await provider.getBalance(SENDER_ADDRESS);
  const recipientBalanceBefore = await provider.getBalance(RECIPIENT_ADDRESS);

  console.log({
    senderBalanceBefore: ethers.utils.formatEther(senderBalanceBefore),
    recipientBalanceBefore: ethers.utils.formatEther(recipientBalanceBefore),
  });

  const tx = await wallet.sendTransaction({
    to: RECIPIENT_ADDRESS,
    value: ethers.utils.parseEther('0.025'),
  });

  await tx.wait();

  const senderBalanceAfter = await provider.getBalance(SENDER_ADDRESS);
  const recipientBalanceAfter = await provider.getBalance(RECIPIENT_ADDRESS);

  console.log({
    senderBalanceAfter: ethers.utils.formatEther(senderBalanceAfter),
    recipientBalanceAfter: ethers.utils.formatEther(recipientBalanceAfter),
  });
})();
