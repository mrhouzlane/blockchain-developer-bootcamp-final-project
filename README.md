# Betting Pool Dapp 

<h4> Why building a Betting Pool and not a Classical Betting platform ? </h4> 

<p> Every human in this earth wants to participate to something, sometimes by risking his money. This is what we refer to gambling. But gambling through the years was always about wins and loses , about all in , getting rich quick or becoming poor from one day to another. Why don't we break the rules of betting ? What about loosing a bet and still getting rewards from the pool you are betting in (pool here means the total amount bet on the outcome 1 or 2 ). 
This is where we want to innovate. IMAGINE LOOSING A BET AND STILL GETTING REWARDS FROM THE POOL ! This means your balance will never be 0 ! YOU WILL ALWAYS BE ALIVE AND IN THE GAME  !!! 


<h1> Description </h1>

<p> 
A betting platform where a player will bet on 2 outcomes : 1 or 2. His bet will be added to other players bet and he will earn a share of the pool if he looses.
If he wins he will get his rewards (bet amount * (odds -1) ) and a share of the rewards. So even if you loose you get some rewards. 
 
Imagine : 
 
 <em> <ul> Player 1 : <em> 
  <li> bets 200 DAI on the outcome 1 (team 1 wins) </li>
  <li> the result is team 2 wins , so the winner outcome is 2 </li> 
  <li> will loose his betting amount, but still wins a share of the pool*</li> 
 </ul> 
 
  *share of the pool : it is the amount of his bet divided by the totalamount of the pool <strong> (amountBet / totalAmountPool) * coeff 
  with a coeff implemented depending of the size of the pool to let the website remain sustainable to control the amount that is given to the player who loses 
  without having some tricks made by the players by arbitrage. 
  

 

 
 <em> Requirements : 
 
  We should verify that a player :
  <ul> 
   <li> has not placed a bet before </li> 
   <li> bets an amount > minimumBet </li> 
   <li> he exists in the players array to receive his reward </li> 
   
   </em> 
  
  <em> Rewards : (approximations ) 
 
   
 In case Player looses : 
 - > If the amount of the player's bet is less than 25% of the pool size he will earn 0,15% of the totalPoolamount 
 - > If the amount of the player's bet is bigger than 25% of the pool size he will earn 0,25% of the totalPoolamount 
 ... 
   
 In case Player wins : 
 - > The rewards are relative to his wins : he will get a %(Formula to implement). 


# Front-end project

 <h2> PROTOCOL </h2> 


> Pools are outcomes like 1 or 2. 

 Player can : 
<ul> 
  <li> bet </li> 
  <li> withdraw his rewards </li> 
  <li> cash out depending on the odds fluctuations </li> 
  

 Functions are : 

- distributePrizes
- bet 
- checkPlayerExists

 # Underlying protocols 

 - <strong> Chainlink Oracle </strong> : import data for the odds
 - <strong> 1inche </strong> : DeFi aggregator 
 
 # Programming languages  
 <ul> 
  
   <li> Solidity </li> 
   <li> React </li> 
   <li> HTML </li> 
   <li> Javascript </li> 

 </ul> 
 
 
 # Scalability 
 
 First we will implement only 2 outcomes 1 or 2. Then we can add other outcomes like tie X , number of goals scored , team with most of goals, number of cards ... 
 Also we can use oracles like Chainlink oracle to 
 



