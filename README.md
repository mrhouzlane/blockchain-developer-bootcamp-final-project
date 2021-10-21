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
 
  *% rewards at 25% of the target < % % rewards at 50% of the target etc ..  
  *Goal : encourage donors to participate early in the project 
 
 - > % rewards at 25% of the target is 20% (%chosen by the Founder )
 - > % rewards at 50% of the target is 10% (%choosen by the Founder ) 
 - > % rewards at 75% of the target is 5% (%choosen by the Founder ) 


<h1> Frontend project </h1> 



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




