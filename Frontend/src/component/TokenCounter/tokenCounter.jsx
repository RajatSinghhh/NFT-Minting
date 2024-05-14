import Button from "../Button/Button"
import { useContext, useEffect, useState, } from "react"
import Web3Context from "../../context/Web3Context"
import {toast} from "react-hot-toast"

const TokenCounter = () => {
    const { nftSaleContract } = useContext(Web3Context)
    const [counter, setCounter] = useState(0)
    const tokenCounter = async () => {
        try {
            const transactionBigNumber = await nftSaleContract.getTokenCounter()
            const transaction = transactionBigNumber.toString()             
            setCounter(transaction)                 
            toast.success("Total Nfts sold updated")
            console.log(counter)
          
        }
        catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => { 
    //     const interval = setInterval(() => {
    //         tokenCounter();
    //     }, 10000);
    //     return () => clearInterval(interval);
    // }, [counter]);
   
    return (
        <div className= "mt-4">
        <div className= "flex items-center justify-center">
            <Button onClick={tokenCounter} type="button" label="Total Nft Sold"></Button>
            <h4 className="font-bold mx-auto">Total NFTs Sold {counter} out of 101</h4>
        </div>
        </div>

    )
}
export default TokenCounter