const Lottery = artifacts.require("Lottery");


contract('Lottery', async (accounts) => {

    it('allows account to enter int lottery', async () => {
        let instance = await Lottery.deployed();
        await instance.enter({ from: accounts[1], value: web3.utils.toWei('1', 'ether') })
        let balance = await instance.getBalance({ from: accounts[0] });
        assert.equal('1000000000000000000', balance.toString());
    })

})