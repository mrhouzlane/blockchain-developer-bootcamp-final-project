pragma solidity ^0.5.0;

import './IERC20.sol' ;
import './IERC1155.sol';
import './IConditionalTokens.sol';

contract ConditionalTokensWalelt is IERC1155TokenReceiver{
    IERC20 dai ;
    IConditionalTokens conditionalTokens ; //interact with Gnosis
    address public oracle ; //store the address of the oracle = report the outcome of the bet 
    mapping(bytes32 => mapping(uint => uint)) public tokenBalance; // for the questionId //mapping in the index of the collection array 
    address admin ;                                                               
    
    constructor(
        address _dai,
        address _conditionTokens,
        address _oracle
        ) public {
        dai = IERC20(_dai) ; 
        conditionalTokens = IConditionalTokens(_conditionTokens); 
        oracle = _oracle ; 
        admin = msg.sender ; 
        }
        
    function redeemTokens(
        bytes32 conditionId, 
        uint[] calldata indexSets
        ) external {
        conditionalTokens.redeemPositions(
            dai,
            bytes32(0),
            conditionId,
            indexSets 
        ); 
    }
    
    function transferDai(address to, uint amount) external {
        require(msg.sender == admin, 'only admin');
        dai.transfer(to, amount);
    }
    
    
  
    
    function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes calldata data
    )
        external
        returns(bytes4) {
            return bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"));
            
    }

   
    
    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] calldata ids,
        uint256[] calldata values,
        bytes calldata data
    )
        external
        returns(bytes4) {
            return bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"));
    }
            
}


