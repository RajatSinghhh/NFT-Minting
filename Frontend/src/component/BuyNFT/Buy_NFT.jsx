import Button from "../Button/Button"
import { useRef, useContext,} from "react"
import { ethers} from "ethers"
import Web3Context from "../../context/Web3Context"
import {toast} from "react-hot-toast"


const BuyNft = () => {
    const { nftSaleContract } = useContext(Web3Context)
    const buyAmountRef = useRef()
    const saleNft = async (e) => {
        e.preventDefault()
        const amount = buyAmountRef.current.value.trim();
        console.log(amount)
        if (isNaN(amount) || amount <= 0) {
            toast.error("please enter a valid number")
            console.log("please enter a valid number")
            return;
        }
        const amountToBuy = ethers.parseUnits(amount, 18).toString();
        console.log(amountToBuy)
        try {
            const transaction = await nftSaleContract.mintNft({ value: amountToBuy })
            await toast.promise(transaction.wait(),
            {
                loading:"Transaction is pending...",
                success:"Transaction is Successful",
                error:"Transaction is failed"
            })
            console.log(transaction)
            buyAmountRef.current.value = ""
           
            }
       
        catch (error) {
            toast.error("Staking Failed")

            
            console.log(error)
        }
    }

    return (
        <div className="flex items-center justify-center ">
            
            <form onSubmit={saleNft} className="px-6 py-6" >
                <label className="font-bold mx-auto" >Enter Amount</label>
                <input className="px-4 py-2 font-bold border border-gray-300 rounded-md w-full mt-2 mx-auto"type="text" ref={buyAmountRef} placeholder="Exact 0.01 ethers"></input>
                <Button onClick={saleNft} type="submit" label="Mint Nft" ></Button>
            </form>
        </div>
    )
}
export default BuyNft