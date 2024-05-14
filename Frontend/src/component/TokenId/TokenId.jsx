import Button from "../Button/Button"
import { useContext, useState, } from "react"
import Web3Context from "../../context/Web3Context"
import {toast} from "react-hot-toast"

const TokenId = () => {
    const { nftSaleContract } = useContext(Web3Context)
    const [counter, setCounter] = useState("")
    const tokenId = async () => {
        try {
            const transactionBigNumber = await nftSaleContract.tokenID()
            const transaction = transactionBigNumber.toString()
            setCounter(transaction)
            console.log(transaction)
            toast.success("TokenId updated")}
        
      
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div >
        <div className="flex items-center justify-center pt-8 ">
            <Button onClick={tokenId } type="button" label="Get Token Id"></Button>
            <h2 className="font-bold mx-auto py-2">Your Token ID: {counter}</h2>
        </div>
        </div>
    )
}
export default TokenId 