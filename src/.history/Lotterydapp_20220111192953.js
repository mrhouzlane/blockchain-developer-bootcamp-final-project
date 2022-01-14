console.log("Welcome at the Lottery")

// 1. detect MetaMak is/ is not installed 

window.addEventListener('load', function () {
    if (typeof window.ethereum != 'undefined') {
        console.log("Metamak detected")
        let mmDetected = document.getElementById("mm-detected")
        mmDetected.innerHTML = "MetaMak Has Been Detected!"
    }
    else {
        console.log("There no Wallet! Not available!")
        alert("You need to install MetaMask or another")
    }
})


const mmEnable = document.getElementById("mm-connect");

mmEnable.onclick = async () => {
    console.log("beep")
} 