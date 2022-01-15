### Design Patter Decisions 


#### Access Control Design Patterns 

The Ownable design pattern has been implemented to allow only the contract owner to change the Lottery game state (Open, Closed, Winner revealed). 


#### Inheritance and Interfaces

The contract inherits from OpenZeppelin Ownable contract [Access Control] (https://docs.openzeppelin.com/contracts/4.x/access-control)

By default, the owner of an Ownable contract is the account that deployed it, which is usually exactly what we want in our Lottery game. 


