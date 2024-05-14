import { ethers, Contract } from "ethers"
import ABI from "../ABI/ABI.json"

export const connectWallet = async () => {
    try {
        let [signer, provider, nftSaleContract, chainId] = [null, null, null, null]
        if (!window.ethereum) {
            console.log("Please install metamask")
        }
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        const selectedAccounts = accounts[0]
        const chainIdHex = await window.ethereum.request({ method: "eth_chainId" })
        chainId = parseInt(chainIdHex, 16)

        if (!selectedAccounts) {
            console.log("No Accounts Detected")
        }
        provider = new ethers.BrowserProvider(window.ethereum)
        signer = await provider.getSigner()

        const nftSaleAddress = "0x1458A963b153176104F18a3001496b6aF6e78674"
        nftSaleContract = new Contract(nftSaleAddress, ABI, signer)

        return { selectedAccounts, provider, nftSaleContract, chainId }

    }
    catch (error) {
        console.log(error)
    }
}