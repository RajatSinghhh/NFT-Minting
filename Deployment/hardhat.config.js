require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers")

const SEPOLIA_PRIVATE_KEY = "62eee621bd2432468e54933e1aea9fbe9092face62a7aa41ca52225e0896bb16"
const SEPOLIA_RPC_URL = "https://eth-sepolia.g.alchemy.com/v2/Qr5xEvzB_mbP4VxREgx7ux7S4QLiw8E7"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `${SEPOLIA_RPC_URL}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
