console.log("Welcome at the Lottery")

window.addEventListener('load', function () {
    if (typeof window.ethereum != 'undefined') {

    }

    else {
        console.log("There no Wallet! Not available!")
        alert("You need to install MetaMask or another")
    }
})