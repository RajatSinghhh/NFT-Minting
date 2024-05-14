const { hre, ethers } = require("hardhat")

const tokenUri = [
  "ipfs://QmSpqTgGpRhKs2ZA2THizctwSAMbaLAPmDrPAr6rHoe4MH",
  "ipfs://QmZ4k9s6yheyAM6jDmuGV2mQNcvA4SLBjwq358QkiDoa1p",
  "ipfs://Qma6oHVEGBhLnmUzbuceij5BYN8oT7yP6Xqkm5CD8u3WHN"
]

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`deploying with account : ${deployer}`)
  const nft_Sale = await ethers.getContractFactory("NftSale")
  const nftSale = await nft_Sale.deploy(tokenUri)
  console.log(`Deployed with an address ${nftSale.getAddress()}`)
}

main().catch((error) => {
  console.log(error)
  process.exitCode = 1
})