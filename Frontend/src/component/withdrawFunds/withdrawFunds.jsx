import Button from "../Button/Button"
import { useContext,} from "react"
import Web3Context from "../../context/Web3Context"
import {toast} from "react-hot-toast"

const WithdrawFunds = () => {
    const { nftSaleContract } = useContext(Web3Context)
    const withdrawFunds = async () => {
        try {
            const transactionBigNumber = await nftSaleContract.withdrawFunds()
            const transaction = transactionBigNumber.toString()
            console.log(transaction)
            await toast.promise(transaction.wait(),
            {
                loading:"Transaction is pending...",
                success:"Transaction is Successful",
                error:"Transaction is failed"
            })
           
         
        }
        catch (error) {
            console.log(error)
        }
        if(transaction){
            console.log("Withhdraw Successful")
        }
    }

    return (
       
        <div className="absolute top-11 right-0"> 
            <Button onClick={withdrawFunds} type="button" label="Withdraw Funds"></Button>
            <a href="https://web3synapse.com/NftMarketplace">Click Nft Marketplace</a>
        </div>
       
       
   

    )
}
export default WithdrawFunds