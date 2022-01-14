console.log("Welcome at the Lottery")


const lotteryAddress = "0x328a827747aC0128d843665973E76cE4a34BF55c"
const ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
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
        "name": "getBalance",
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

    var web3 = new Web3(window.ethereum)

    const lotteryContract = new web3.eth.Contract(ABI, lotteryAddress)

    lotteryContract.setProvider(window.ethereum)

    lotteryContract.methods.startLottery().send({ from: ethereum.selectedAddress })

}

const enterLL = document.getElementById("lottery-enter-box");
enterLL.onclick = async () => {

    var web3 = new Web3(window.ethereum)

    const lotteryContract = new web3.eth.Contract(ABI, lotteryAddress)

    lotteryContract.setProvider(window.ethereum)

    lotteryContract.methods.enter().send({ from: ethereum.selectedAddress, value: web3.utils.toWei('0.001', 'ether') })
}


const balanceOfLottery = document.getElementById("get-balance");
balanceOfLottery.onclick = async () => {

    let getBalance = lotteryContract.methods.getBalance().call()

    const balanceLL = document.getElementById("balance")
    balanceLL.innerHTML = "The balance of the Lottery is : " + getBalance;

}

/// BALANCE
const balance = document.getElementById('balance')

async function displayBalance(lotteryAddress) {
    let contractBalance = await games.methods.getBalance(address).call();
    let ethBalance = playerBalance / 10 ** 18;
    balance.innerHTML = 'Your Balance : ' + ethBalance + '  ETH';

}












