# blockchain-developer-bootcamp-final-project

Repository created for the final Consensys Bootcamp 2021 project.

# Lottery algorithm 

The ConsenSys Bootcamp Final project used the Ethereum blockchain network to create an application that is tested and compiled. 


# Worflow and structure 

```

blockchain-developer-bootcamp-final-project

── build/contracts
	├── Lottery.json
	└── Migrations.json
├── public
└── contracts
	├── Lottery.sol
	├── Migrations.sol 
	└── migrations 
		├──1_initial_migration.js
		└──2_lottery_migrations.js
	├── simpledapp
	 ├── app.css
	 ├── index.html
	 └── Lotterydapp.js
└── test 
  └──  Lottery_test.js 

```

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


3.2 For ganache-cli

```
npm -i -g ganache-cli
```


4. Initiate Ganache

5. Install [Metamask](https://metamask.io/)

6. Import Ganache accounts

7. Deploy contracts to Ganache

+ If using ganache-cli, go to truffle config file and change network id to 7545.

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




   


