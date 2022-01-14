const Lottery = artifacts.require("Lottery");


contract('Lottery', async (accounts) => {

    it('should initialise lottery state to closed', async () => {
        let instance = await Lottery.deployed();
        let lottery_state = await instance.lottery_state();
        assert.equal(lottery_state, 1)
    })

    it('should set manager to account 0', async () => {
        let instance = await Lottery.deployed();
        let manager = await instance.manager();
        //await instance.startLottery({ from: accounts[0] })
        // await instance.enter({ from: accounts[1], value: web3.utils.toWei('1', 'ether') })
        // await instance.enter({ from: accounts[2], value: web3.utils.toWei('1', 'ether') })
        // await instance.enter({ from: accounts[3], value: web3.utils.toWei('1', 'ether') })
        assert.equal(manager, accounts[0])
        // let balance = await instance.getBalance({ from: accounts[0] });
        // assert.equal(web3.utils.toWei('3', 'ether'), getBalance.toString());
    })



})