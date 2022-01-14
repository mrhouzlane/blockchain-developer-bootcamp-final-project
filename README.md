# blockchain-developer-bootcamp-final-project

# blockchain-developer-bootcamp-final-project

Repository created for the final Consensys Bootcamp 2021 project.

### Application for betting on a team and getting rewards : 

A guessing game : 5 players can bet on a number between 0 and 5. An oracle provide the winner number and look for the playe who obtained the closest result.


# Project Flow 

<ul> 
   <li> Create smart contract template that all better will use. </li> 
   <li> Create front end application for the user. </li> 

</ul> 
   
# Future Ideas

<ul> 
   <li> Use IPFS or similar system to store user data </li> 
   <li> Use MetaMask to login to users account </li> 
   <li> Add protocols (like UnlockProtocol -- NFT Contract ) to access Prenium betting advantages  </li> 
   <li> Upgrade the smart contract to make it a lottery / Casino games </li> 
   <li> Deploy the game on another network to minimize the gas cost </li> 
</ul> 

# Chainlink Randomness 

To get a random number we are using Chainlink VRFConsumerBase. Please follow these steps :

1. Fund your contract with some LINK 

You can get testnet LINK on Rinkeby here : 

```https://faucets.chain.link/rinkeby?_ga=2.241222538.966483450.1639086758-993978172.1636569702 ```


2. Verify your Chainlink VRF Contract Addresses with the network used here : 

``` https://docs.chain.link/docs/vrf-contracts/ ```


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




   


