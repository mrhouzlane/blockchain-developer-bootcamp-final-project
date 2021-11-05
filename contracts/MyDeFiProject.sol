pragma solidity ^0.5.0 ;
 
import './IERC20.sol' ;
import './IERC1155.sol';
import './IConditionalTokens.sol';

contract MyDeFiProject {
    // DAI stablecoin as collateral for Gnosis ; it's gonna be the payout for the winner of the bet
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
        
    function createBet(bytes32 questionId , uint amount) external payable {
    // questionId : is the name of the bet - naming used by Gnosis
    // amount : amount provided for the bet 
        conditionalTokens.prepareCondition(
            oracle, // oracle we trust to make a report of the outcome 
            questionId, // An identifier for the question to be answered by the oracle.
            3 //number of outcomes
            
        ); 
        
        bytes32 conditionId = conditionalTokens.getConditionId(
            oracle,
            questionId,
            3 // number of slots 
        );
        
        //approve the smart contract of Gnosis to transfer our DAI ; collateral we provide 
        
        //Array with different splits we create : BitmapVector in Binary   A = 001 , B = 010 , C = 100
        //001
        //010
        //100
        //=> 110 [1,3] // B and C so 010 appended to 100 gives 110 
        // C : 3
        // B : 2 
        // A : 1  
        
        uint[] memory partition = new uint[](2);//array of lenght 2 
        partition[0] = 1 ; 
        partition[1] = 3 ; 
        dai.approve(address(conditionalTokens), amount);
        conditionalTokens.splitPosition(
            dai, // collateral token address 
            bytes32(0), // For splitting from collateral, pass bytes32(0)
            conditionId, // "Choice" condition ID (we get this with the function getConditionId -> returns byte32 
            partition, //Each element of this partition is an index set 
            amount   // Amount of collateral token to submit for holding
                    // in exchange for minting the same amount of
                    // conditional token in each of the target positions
        ); 
        
        tokenBalance[questionId][0] = amount ; 
        tokenBalance[questionId][1] = amount ; 
        
    
    }
    // function to transfer tokens for everyone who wanna bet 
    function transferTokens(
        bytes32 questionId, //identify the bet
        uint indexSet, //outcome collection you want , indexSet of B is 0b010 : binary value 010 and 0b : base(2) 
        address to, //recipient of the conditionnal token 
        uint amount
    
        ) external {
            require(msg.sender == admin, 'only admin'); 
            //indexSet because one level of conditionalId , otherwise we use positionId 
            require(tokenBalance[questionId][indexSet] >= amount, 'not enough token');
            
            
            bytes32 conditionId = conditionalTokens.getConditionId(
                oracle,
                questionId,
                3
            );
            
            bytes32 collectionId = conditionalTokens.getCollectionId(
                bytes32(0),
                conditionId,
                indexSet
                
            ); 
            
            uint positionId = conditionalTokens.getPositionId(
                dai,
                collectionId
            );
            conditionalTokens.safeTransferFrom(
                address(this),
                to, //need to implement ERC1155TokenReceiver 
                positionId, //identity a conditionaltoken 
                amount,
                "" //data we speci
                
            ); 
                
                
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
        
    
