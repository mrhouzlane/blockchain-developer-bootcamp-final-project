# CROWDFUNDING FOR EARLY CRYPTO PROJECTS <strong> IDO </strong> 


<h1> Description </h1>

<h4> Benefits : </h4>
<ul> 
 
 <li>  Projects gets more time building and less time fundraising </li>
 <li> Protect against large tokens concentrations with fixed target/swaps </li>
 <li> Early acess </li> 
 <li> Any eligible address can participate in a IDO </li> 
 
 </ul> 

The idea here is to build a DApp where anyone with a github project url can deposit it and become the Founder.
The Founder will put his url project and his public metamask address. 

The project become a pool where the Founder sets : 
 - the target price to reach (crowdfunding method). 
 - the % of rewards he allows donors to claim every step. 
 
 <em> Quick example : </em> 
 
 If target = 40,000 $ , then a mechanism will convert this on the choice of the Founder token price (Oracle) 
 
 
 <strong> Set up (Founder / owner ) </strong> 
 
 <em> Restrictions : 
 
  *% rewards at 25% of the target < % % rewards at 50% of the target etc ..  
  *Goal : encourage donors to participate early in the project  </em> 
 
 - > % rewards at 25% of the target is 20% (%chosen by the Founder )
 - > % rewards at 50% of the target is 10% (%choosen by the Founder ) 
 - > % rewards at 75% of the target is 5% (%choosen by the Founder ) 


# Front-end project

 <h2> PROTOCOL </h2> 


> Pools are managed by the Founders. 

* Founder can : 
<ol> 
 <li> <strong>Deposit</strong> a project </li>
 

 </ol> 


* Public (donor) can : 
<ol> 
 <li> participate to the pool </li> 
 <li> redeem only if ( <em> this part has to be completed to allow the pool to continue growing without donors withdrawing their money </em>) </li> 
 <li> claim % rewards </li> 
 </ol>


> The Founder is the owner of the pool :

*functions are : 

- createPool
- chooseToken
- setUpreward1 (25%) / setUpreward2 (50%) / setUpreward3 (75%) / setUpreward4 (100%) 
- withdrawTotal (this function is deployed when the amount desired by the project owner has been reached or exceeded ) 

* Underlying protocols : 

 - <strong> Polkastarter </strong> : Leading IDO platform in the crypto ecocystem 
 - <strong> Chainlink Oracle </strong> : to convert FIAT into Stablecoins ?? (<em> to rewiew </em> ) 
 
 # Programming languages  
 <ul> 
   <li> Solidity </li> 
   <li> React </li> 
 </ul> 
 
 
 # Scalability 
 
 As hackathons are growing at a very fast pace, accelerators are good to enable projects to grow. Still accelerators are selecting projects. Here everyone can share
 his project. Opportunities and growth pace can be great. 
 
 



