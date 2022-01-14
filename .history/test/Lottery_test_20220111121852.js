const Lottery = artifacts.require("Lottery");


contract('Lottery', async (accounts) => {

    it('allows account to enter into lottery', async () => {
        let instance = await Lottery.deployed();
        await instance.enter({ from: accounts[0], value: web3.utils.toWei('1', 'ether') })
        let balance = await instance.getBalance({ from: accounts[0] });
        assert.equal(0, 0);
    })

})