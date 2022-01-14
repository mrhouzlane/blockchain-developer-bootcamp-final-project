console.log("Welcome to the Lottery")

// //This is the top of application.js
// require('dotenv').config()
// //This is an example of process.env later in the file
// var PrivateKey = new Buffer(process.env.["PRIVATE_KEY"], "hex")
// //Here is another example of using process.env
// const APIKey = process.env.API_KEY;


// ABI / Address 
const lotteryAddress = "0xbAc124E4E9Ba2D46DC1B61596be1AB316CA160Bc"
const ABI = [
    {
        "inputs": [],
        "name": "endLottery",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "enter",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "MoneySent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "pickWinner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardWinner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "startLottery",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lottery_state",
        "outputs": [
            {
                "internalType": "enum Lottery.LOTTERY_STATE",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "players",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "random",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "winner",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

// GENERAL 
var web3 = new Web3(window.ethereum)
const lotteryContract = new web3.eth.Contract(ABI, lotteryAddress)
lotteryContract.setProvider(window.ethereum)

// 1. detect MetasMak is/ is not installed 

window.addEventListener('load', function () {
    if (typeof window.ethereum != 'undefined') {
        console.log("Metamak detected")
        let mmDetected = document.getElementById("mm-detected")
        mmDetected.innerHTML = "MetaMask Has Been Detected!"
    }
    else {
        console.log("There no Wallet! Not available!")
        alert('Please install MetaMask!')
    }
})


const mmEnable = document.getElementById("mm-connect");
mmEnable.onclick = async () => {
    await ethereum.request({ method: 'eth_requestAccounts' });

    const mmCurrentAccount = document.getElementById("mm-current-account")
    mmCurrentAccount.innerHTML = "Here is your current account:  " + ethereum.selectedAddress
}


// START LOTTERY 
const startLL = document.getElementById("lottery-start-box");
startLL.onclick = async () => {

    lotteryContract.methods.startLottery().send({ from: ethereum.selectedAddress })

}


// ENTER LOTTERY 
const enterLL = document.getElementById("lottery-enter-box");
enterLL.onclick = async () => {

    lotteryContract.methods.enter().send({ from: ethereum.selectedAddress, value: web3.utils.toWei('0.001', 'ether') })
}

// BALANCE SECTION 

const balanceOfLottery = document.getElementById("get-balance");
window.addEventListener('load', async () => {

    let contractBalance = await web3.eth.getBalance(lotteryAddress);
    let ETHBalance = contractBalance / 10 ** 18;
    let balance = document.getElementById("balance");
    balance.innerHTML = 'Total jackpot : ' + ETHBalance + '  ETH';

})

// WINNER SECTION
const winnerIs = document.getElementById("get-winner");
winnerIs.onclick = async () => {
    await lotteryContract.methods.pickWinner().send({ from: ethereum.selectedAddress });
    let winnerLL = document.getElementById("winner")
    const winner = await lotteryContract.methods.winner().call()
    winnerLL.innerHTML = "The winner is : " + winner
}

// REWARD SECTION 
const reward = document.getElementById("rewards");
reward.onclick = async () => {

    await lotteryContract.methods.rewardWinner().send({ from: ethereum.selectedAddress });

}

//END LOTTERY 
const EndLL = document.getElementById("EndLL");
EndLL.onclick = async () => {

    await lotteryContract.methods.endLottery().send({ from: ethereum.selectedAddress });

}

//STATE OF LOTTERY


window.addEventListener('load', async () => {
    const state = await lotteryContract.methods.lottery_state().call();
    if (state == "0") {
        console.log("Lottery OPEN")
        let openState = document.getElementById("Lottery State")
        openState.innerHTML = "Lottery is OPEN"
    }
    if (state == "1") {
        console.log("Lottery CLOSED")
        let openState = document.getElementById("Lottery State")
        openState.innerHTML = "Lottery is CLOSED"
    }
    if (state == "2") {
        console.log("WINNER REVEALED")
        let closedState = document.getElementById("Loading")
        closedState.innerHTML = "WINNER REVEALED";
    }
})


window.addEventListener('load', async () => {
    const winner = await lotteryContract.methods.winner().call()
    address0 = "0x0000000000000000000000000000000000000000"
    let playerLL = document.getElementById("player")
    if (winner == address0) {

        playerLL.innerHTML = "No winner yet";

    } else {

        playerLL.innerHTML = "Winner is: " + winner;
    }

})

