// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NftSale is Ownable, ERC721 {
    string[] public nftTokenUri;
    uint256 private tokenCounter;
    uint256 public mintFees = 10000000000000000;
    uint256 public TokenId;

    event NftMint(address indexed sender, uint indexed tokenId, string tokenURI);
    error Transfer_Failed();
    error Need_more_eth();

    mapping(uint256 tokenId => string) public _tokenURIS;

    constructor(
        string[] memory _tokenUri
    ) ERC721("Motivation Club", "MTC") Ownable(msg.sender) {
        tokenCounter = 0;
        nftTokenUri = _tokenUri;
    }

    function mintNft() public payable {
      if(msg.value != mintFees){
        revert  Need_more_eth();
      }
       uint256 tokenId = tokenCounter;
        tokenCounter = tokenCounter + 1;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId , nftTokenUri[tokenId]);
        TokenId = tokenId;

        emit NftMint(msg.sender, tokenId, nftTokenUri[tokenId]);
    }

function tokenURI(uint256 tokenId) public view  override  returns (string memory) {
    require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
    return _tokenURIS[tokenId];
}
    function _setTokenURI(
        uint256 tokenId,
        string memory _tokenURI
    ) internal virtual {
        _tokenURIS[tokenId] = _tokenURI;
    }

    function getTokenCounter() public view returns (uint256) {
        return tokenCounter;
    }

    function mintFee() public view returns (uint256) {
        return mintFees;
    }

    function withdrawFunds() public payable onlyOwner {
        uint amount = address(this).balance;
        (bool success, ) = payable(msg.sender).call{value: amount}("");
        if (!success) {
            revert Transfer_Failed();
        }
  
    }
  function tokenID() public view returns(uint256) {
    return TokenId;
  }
 }


 
