<strong> Description </strong> 


The idea here is to build a DApp where anyone with a github project url can deposit it and become the Founder.
The Founder will put his url project and his public metamask address. 

The project become a pool where the Founder sets : 
 - the target price to reach (crowdfunding method). 
 - the % of rewards he allows donors to claim every step. 
 
 Quick example :
 
 If target = 40,000 $ , then a mechanism will convert this on the choice of the Founder token price (Oracle) 
 Set up (Founder / owner )  :  
 
 Restrictions : 
 
  *% rewards at 25% of the target < % % rewards at 50% of the target etc ..  : Goal : encourage donors to participate in the project at the beginning, not at the     end 
 
 - > % rewards at 25% of the target is 20% (%chosen by the Founder )
 - > % rewards at 50% of the target is 10% (%choosen by the Founder ) 
 - > % rewards at 75% of the target is 5% (%choosen by the Founder ) 



 
           
       
           
       
           
           


A smart contract helps to block the funds within blockchain until the project or startup founder makes progress in the project.

The project will develop a smart-contract driven crowdfunding platform built on Ethereum blockchain. 

The project will focus on two main events : 

- lending 
- borrowing 

I will use a special token created : TokenA to lend money 
I will use another token : TokenB to borrow money 

It will be decentrilized so everyone can participate. 

Everyone participating in the pool will win Token with the Compound base platform. 



<h1> Directory structure </h1> 

I will start by creating the croudfunding campaign first. 
With the use of blockchain trustless , the platform will keep track of the contributors. 


Anyone can contribute to a project with a <strong> minimum entry point : 0.05 ETH </strong> 

Projects allowed are github projects involving the blockchain only, so it should be something related to blockchain.

Members can verify all the transactions on Ethereum. 







<h1> Frontend project </h1> 

The project should keeping running and never go offline .

Will be built on : 

- Layer 2 Network 
- Compound 
- Aave (lending and borrowing platform) using data feed. 
- 

- Mutiple funders will be defined into structs with solidity . 


#PROTOCOL 




> Pools are managed by the Founders. 

* Founders can : 

- Deposit a project 
- claim % rewards 


* public can : 

- mint 
- redeem
- claim % rewards 

> The Founder is the owner of the pool :

*functions are : 

- createPool
- withdrawTotal (this function is deployed when the amount desired by the project owner has been reached or exceeded ) 

* Underlying protocols : 

- Polkastarter 




