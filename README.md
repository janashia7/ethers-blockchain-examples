# Ethers.js by Example

Learn how to use ethers.js from these examples

## Technology Stack & Tools

- Javascript (Writing scripts)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [Node.js](https://nodejs.org/en/) (To run our scripts and install ethers.js)
- [Infura](https://infura.io/) (Node provider)

## Setting Up

### 1. Clone/Download the Repository

### 2. Install Dependencies

```
npm install
```

## Ethers.js scripts

### readBalances.js - Reads balance of ether of wallet address

- Input your infura project ID

```
node services/readBalances.js
```

### readContract.js - Reads the balance of token wallet address from the token contract

- Input your infura API_KEY

```
node services/readContract.js
```

### sendTransactions.js - Transfers 0.025 ether from sender account to recipient account

- Input your infura API_KEY
- Input your sender account public key
- Input your recipient account public key
- Input your sender account private key

```
node services/sendTransactions.js
```

### writeContract.js - Transfers entire balance of token of your choosing from sender account to recipient account (on goerli testnet)

- Input your infura API_KEY
- Input your sender account public key
- Input your recipient account public key
- Input your sender account private key
- Input contract address of the token you want to transfer

```
node services/writeContract.js
```

### contractEvent.js - Queries a block for transfer events

- Input your infura API_KEY

```
node services/contractEvent.js
```

### inspectBlocks.js - Get transactions from block

- Input your infura API_KEY

```
node services/inspectBlocks.js
```
