# blockchain-developer-bootcamp-final-project

Repository created for the final Consensys Bootcamp 2021 project.

#Application for betting on a team and getting rewards : 

An application that allows you to bet on either Team 1 or Team 2 or a draw and participate to the pool (1) , (2) or 3(draw). 

# Problem 

Every betting platform is a win or loose. What is changing here is the possibility to still get rewards from a pool even if you loose,
while participating to a pool when choosing your side. 

# Solution

smartBet will allow you to bet on a team and contributing to the pool of this team. 

# Project Flow 

<ul> 
   <li> Create smart contract template that all better will use. </li> 
   <li> Create front end application for both better and brooker to interact with. </li> 
   <li> Allow betters to choose their side and participate to a pool. </li> 
   <li> </li> 
   <li> </li> 
</ul> 
   
# Future Ideas

<ul> 
   <li> Use IPFS or similar system to store user data </li> 
   <li> Use MetaMask to login to users account </li> 
   <li> Add protocols (like UnlockProtocol -- NFT Contract ) to access Prenium betting advantages  </li> 
</ul> 


# Installation and Setup

1. Clone the repository 

```
git clone PASTE_LINK_HERE

```

2. Install dependencies

Do this in both the root and client directory

```
npm install

```


3.1 Install truffle and either Ganache or ganache-cli

```
npm -i -g truffle 

```


3.2For ganache-cli

```
npm -i -g ganache-cli
```


4. Initiate Ganache

5. Install [Metamask](https://metamask.io/)

6. Import Ganache accounts

7. Deploy contracts to Ganache

+ If using ganache-cli, go to truffle config file and change network id to 8545.

```
truffle compile
```

Then run
```
truffle migrate
```

8.Start application from client directory
```
cd client
npm start
```




   


