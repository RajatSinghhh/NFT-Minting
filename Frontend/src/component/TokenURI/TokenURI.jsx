import Button from "../Button/Button"
import { useRef, useContext,useState} from "react"
import Web3Context from "../../context/Web3Context"
import {toast} from "react-hot-toast"

const TokenURI = () => {
    const { nftSaleContract } = useContext(Web3Context)
    const tokenIdRef = useRef()
    const[tokenId ,setTokenId] = useState("")
    const tokenUri = async (e) => {
        e.preventDefault()
        const value = tokenIdRef.current.value.trim();
        console.log(value)
        if (isNaN(value) || value <= 0) {
            toast.error("Please enter a valid number")
            console.log("please enter a valid number")
            return;
        }
        try {
            const transaction = await nftSaleContract.nftTokenUri(value)
            setTokenId(transaction)
            console.log(transaction)
            toast.success("Fetched Token URI")
           
            
           tokenIdRef.current.value = ""
            }
       
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container mx-auto max-w-screen-x1 mt-4">
                <form className="px-6 py-6" onSubmit={tokenUri}>
                <label className="font-bold">Enter Token Id</label>
                <input className="px-4 py-2 font-bold border border-gray-300 rounded-md w-full mt-2" type="text" ref={tokenIdRef} placeholder="Enter Token Id"></input>
                <Button onClick={tokenUri} type="submit" label="Get Token URI " ></Button>
                <h4 className="font-bold mx-auto py-2"> Your Token URI:{tokenId} </h4>
            </form>
        </div>
    )
}
export default TokenURI 