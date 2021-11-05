pragma solidity ^0.5.0;

import './IERC20.sol';
import './IERC1155.sol';

// From Gnosis 
contract IConditionalTokens is IERC1155 {
    
    // oracle : address that will solve the outcome 
    //questionId : byte32 that represent the different possibilities A, B, C for example 
    // outcomeSlotCount : number of outcomeSlot = number of binary expressions possible 
    
    function prepareCondition(
        address oracle, 
        bytes32 questionId, 
        uint outcomeSlotCount
        ) external; 

    
    function reportPayouts(
        bytes32 questionId, 
        uint[] calldata payouts
        ) external;
        

    
    function splitPosition(
        IERC20 collateralToken,
        bytes32 parentCollectionId,
        bytes32 conditionId,
        uint[] calldata partition,
        uint amount
    ) external ; 
        
      

    function mergePositions(
        IERC20 collateralToken,
        bytes32 parentCollectionId,
        bytes32 conditionId,
        uint[] calldata partition,
        uint amount
    ) external ;
    
    
    function redeemPositions(
        IERC20 collateralToken, 
        bytes32 parentCollectionId, 
        bytes32 conditionId, 
        uint[] calldata indexSets
        ) external;
        
    function getOutcomeSlotCount(
        bytes32 conditionId
        ) external view returns (uint); 
       
    function getConditionId(
        address oracle, 
        bytes32 questionId, 
        uint outcomeSlotCount
        ) external pure returns (bytes32);
    

    
    function getCollectionId(
        bytes32 parentCollectionId, 
        bytes32 conditionId, 
        uint indexSet
        ) external view returns (bytes32); 


    function getPositionId(
        IERC20 collateralToken, 
        bytes32 collectionId
        ) external pure returns (uint);
       
}