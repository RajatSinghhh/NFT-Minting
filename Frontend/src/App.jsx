import Wallet from "./component/Wallet/Wallet"
import TokenURI from "./component/TokenURI/TokenURI"
import TokenId from "./component/TokenId/TokenId"
import BuyNft  from "./component/BuyNFT/Buy_NFT"
import ContractAddress from "./component/Contract_Address/contractAddress"
import TokenCounter from "./component/TokenCounter/tokenCounter"
import WithdrawFunds from "./component/withdrawFunds/withdrawFunds"
import Information from "./component/display/information"

function App() {
  return (
  <div className="flex items-center justify-center mt-4">
   
      <Wallet>
       <BuyNft></BuyNft>
        <TokenURI></TokenURI>
       
        <ContractAddress></ContractAddress>
        <TokenCounter></TokenCounter>
        <TokenId></TokenId>
        <WithdrawFunds></WithdrawFunds>
        
       
      </Wallet>

      <Information></Information>
  
   </div> 
  )
}

export default App
