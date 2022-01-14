###Avoiding Common Attacks 

#### Solidity compiler 

- Using Specific Compiler Pragma: Solidity 0.8.0 was used in Lottery.sol ( [SWC-103](https://swcregistry.io/docs/SWC-103) ) 

### Proper Use of Require, Assert and Revert:

** Require when (owner != msg.sender) 
** Assert for tests 
** Revert to catch errors 

#### Visibily functions [SWC-100](https://swcregistry.io/docs/SWC-100)

Proper setting of visibility for functions: Functions are specified as being external, public, internal or private to reduce the attack surface of a contract system

#### Modifiers 

The contract makes use of multiple modifiers: 

- Ownable modifier of OpenZeppelin Ownable contract. 


