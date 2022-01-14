const Lottery = artifacts.require("Lottery");


contract('Lottery', async (accounts) => {

    it('allows account to enter into lottery', async () => {
        let instance = await Lottery.deployed();
        let lottery_state = await instance.lottery_state();
        //await instance.startLottery({ from: accounts[0] })
        // await instance.enter({ from: accounts[1], value: web3.utils.toWei('1', 'ether') })
        // await instance.enter({ from: accounts[2], value: web3.utils.toWei('1', 'ether') })
        // await instance.enter({ from: accounts[3], value: web3.utils.toWei('1', 'ether') })
        assert.equal(lottery_state, 1)
        // let balance = await instance.getBalance({ from: accounts[0] });
        // assert.equal(web3.utils.toWei('3', 'ether'), getBalance.toString());
    })

})