# Betting with ConditionalTokens. 


<h4> Why using Conditonal Tokens to make bets ? </h4>

<p> Gambling sector : The global online betting market is growing 11.5% annually. estimated to reach about $93 billion by 2023.
   


<h1> Description </h1>

<p> This betting Dapp is based on Gnosis implementation of Conditional Tokens </p> 
Please refer to this link : https://docs.gnosis.io/conditionaltokens/docs/devguide01/ to get all informations about the coding process. 

<h3> Structure </h3> 

On top of the imported ERC20 and ERC1155 will be coded a program to createBet and to redeemTokens.

<string> Example :</string> 
Let's say we have 3 outcomes possible to the question : <q> Who will win the Ballon d'or 2021 ?  </q> :

<dl>
<dt> 1. Messi </dt>
<dt> 2. Benzema </dt>
<dt> 3. Lewandowski </dt>
</dl>

To get the ConditionId 3 parameters are needed : 

<ul>
  <li>oracle's address : the account assigned to report the result for the prepared condition. </li>
 <li>a 32bytes address for the questionId.  </li>
 <li>the number of outcomeSlots identified as outcomeSlotsCount which is 3 here </li>
  
 
Situation 1 : 
  

<em> Player 1 :  bets 200 DAI on the outcome 1.Messi <em> : 
  
  1. Our smart contract will receive 200 DAI as the collateral Token.
  2. This 200 DAI will be splited into ConditionalTokens on the 3 outcomes possible
  3. The oracle will report results of Condition and emits the payouts which is the oracle's answer. 
  4. ConditionalTokens will be then transfered based on ERC1155. Since each token has a positionID, they are indexed to a corresponding conditionalToken. 
  This is why the Receiver has to call the function ERC1155TokenReceiver to get the magic expected values. 



# Underlying protocols

  <ul> Oracles / LP Exchanges : 

     <li> <strong> Chainlink </strong> : resolve the questionId  </li> 
     <li>  <strong> Uniswap </strong> : LP tokens </li> 

   </u> 
# Programming languages

 <ul>

   <li> Solidity </li>
   <li> React </li>
   <li> HTML </li>
   <li> Javascript </li>
 

 </ul>

# Scalability

