# blockchain-developer-bootcamp-final-project

##### Link Netlify : [Lottery Dapp](https://lotterygamebootcamp.netlify.app/)
##### Video :  [screencast walking through the project](https://www.youtube.com/watch?v=ktGePpe3lNw)

### Lottery game : 

Repository created for the final Consensys Bootcamp 2021 project.


#### Idea of the lottery : 

- The manager of the Lottery(owner) collects money for players, and then select a winner using a random function. One player is selected and wins, and others lose their money. 

#### Rules : 

- The minimum number of players must be 3.  
- Only the manager of the contract(owner) can start the lottery and announce the winner.
- The minimum cost to participate in the lottery is 0.001 ETH. 


## Directory structure 


`````

├── .history
├── .vscode
├── build/contracts
└──  contracts
	├── Lottery.sol
	├── Migrations.sol
└── docs
	├── avoiding_common_attacks.md
	└── deployed_address.txt
   └── design_pattern_decisions.md
├── migrations 
   └── 1_initial_migrations.js
   └── 2_lottery_migrations.js
└── src
	├── .history
	└── app.css
   └── index.html
   └── Lotterydapp.js
└── test 
   ├── .gitkeep
   └── Lottery_test.js
└── .env
└── .gitignore
└── truffle.config.js
   
`````

## Installation and Setup

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

8. If using ganache-cli, go to truffle-config.js and change network id to 7545 and run : 

```
ganache-cli 

```
9. In a separate terminal run : 

```
truffle compile

```

Then run : 

```
truffle migrate

```

And for testing : 

```
truffle test 

```

## Future Ideas

- Using VRF Chainlink to generate random numbers. 
- Add a more complex games (Russian Roulette for example). 
- Decentralize the decision to announce the winner




   


