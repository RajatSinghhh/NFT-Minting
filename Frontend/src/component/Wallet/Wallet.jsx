import { useState, useEffect } from "react"
import { connectWallet } from "../../utils/connectWallet"
import Button from "../Button/Button"
import Web3Context from "../../context/Web3Context"
import handleAccountChange from "../../utils/handleAccountChange"
import handleChainChange from "../../utils/handleChainChange"

const Wallet = ({ children }) => {
    const [state, setState] = useState({
        selectedAccounts: null,
        provider: null,
        nftSaleContract: null,
        chainId: null
    })

    useEffect(() => {
        window.ethereum.on("accountsChanged", () => handleAccountChange(setState))
        window.ethereum.on("chainChanged", () => handleChainChange(setState))

        return () => {
            window.ethereum.removeListener('accountsChanged', () => handleAccountChange(setState))
            window.ethereum.removeListener('chainChanged', () => handleChainChange(setState))
        }

    }, [])

    const handleWallet = async () => {
        try {
            const { selectedAccounts, provider, nftSaleContract, chainId } = await connectWallet()
            setState({ selectedAccounts, provider, nftSaleContract, chainId })
        }
        catch (error) {
            console.log(error)
        }
        console.log(state)
    }
    return (
        <div >
            <div className= "absolute right-0 top-0 md:W-1/2"  >
            <Button onClick={handleWallet} type="button" label={state.selectedAccounts ? "Connected":"Connect Account"} />
            </div>
            <Web3Context.Provider value={state}>{children}</Web3Context.Provider>
           
        </div>
    )
}

export default Wallet
