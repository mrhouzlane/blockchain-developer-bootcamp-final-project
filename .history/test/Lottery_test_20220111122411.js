const Lottery = artifacts.require("Lottery");


contract('Lottery', async (accounts) => {

    it('allows account to enter into lottery', async () => {
        let instance = await Lottery.deployed();
        let lottery_state = await instance.lottery_state();
        lottery_state = 0;
        await instance.enter({ from: accounts[1], value: web3.utils.toWei('1', 'ether') })
        await instance.enter({ from: accounts[1], value: web3.utils.toWei('1', 'ether') })
        await instance.enter({ from: accounts[1], value: web3.utils.toWei('1', 'ether') })
        let balance = await instance.getBalance({ from: accounts[0] });
        assert.equal(web3.utils.toWei('3', 'ether'), getBalance.toString());
    })

})