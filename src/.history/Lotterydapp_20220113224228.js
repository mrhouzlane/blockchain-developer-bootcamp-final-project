console.log("Welcome at the Lottery")


const lotteryAddress = "0x734C35aB7B11AEDb4FdcA405f2227787C86c790C"
const ABI = [
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
        "name": "manager",
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

var web3 = new Web3(window.ethereum)
const lotteryContract = new web3.eth.Contract(ABI, lotteryAddress)
lotteryContract.setProvider(window.ethereum)

// 1. detect MetaMak is/ is not installed 

window.addEventListener('load', function () {
    if (typeof window.ethereum != 'undefined') {
        console.log("Metamak detected")
        let mmDetected = document.getElementById("mm-detected")
        mmDetected.innerHTML = "MetaMak Has Been Detected!"
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
    mmCurrentAccount.innerHTML = "Here's your current account!" + ethereum.selectedAddress
}


//var web3 = new Web3(window.ethereum)

const startLL = document.getElementById("lottery-start-box");
startLL.onclick = async () => {

    lotteryContract.methods.startLottery().send({ from: ethereum.selectedAddress })

}

const enterLL = document.getElementById("lottery-enter-box");
enterLL.onclick = async () => {

    lotteryContract.methods.enter().send({ from: ethereum.selectedAddress, value: web3.utils.toWei('0.001', 'ether') })
}

// BALANCE SECTION 
const balanceOfLottery = document.getElementById("get-balance");
balanceOfLottery.onclick = async () => {

    let contractBalance = await web3.eth.getBalance(lotteryAddress);
    let ETHBalance = contractBalance / 10 ** 18;
    let balance = document.getElementById("balance");
    balance.innerHTML = 'Lottery balance: ' + ETHBalance + '  ETH';

}

// WINNER SECTION
const winnerIs = document.getElementById("get-winner");
winnerIs.onclick = async () => {

    var winnerr = await lotteryContract.methods.pickWinner().send({ from: ethereum.selectedAddress });
    let winnerLL = document.getElementById("winner")
    winnerLL.innerHTML = "The winner is : " + winnerr
}

const reward = document.getElementById("rewards");
reward.onclick = async () => {

    await lotteryContract.methods.rewardWinner().send({ from: ethereum.selectedAddress });

}

const EndLL = document.getElementById("EndLL");
EndLL.onclick = async () => {

    await lotteryContract.methods.endLottery().send({ from: ethereum.selectedAddress });

}







// const state = await lotteryContract.methods.lottery_state().call()


// let winner = await lotteryContract.methods.winner().call()
// if winner = address 0, no winner yet
// else show winner