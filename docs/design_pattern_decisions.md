Design Patter Decisions 


Access Control Design Patterns 

The Ownable design pattern has been implemented to allow only the contract owner to change the game status.


Inheritance and Interfaces

The contract inherits from OpenZeppelin Ownable contract:

Ownable: Sets the contract deployer as the owner however this functionality should be dropped in the futur and replaced by setting Chainlink as on oracle.



