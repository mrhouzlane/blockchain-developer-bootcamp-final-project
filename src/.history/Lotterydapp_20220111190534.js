console.log("Welcome at the Lottery")

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

