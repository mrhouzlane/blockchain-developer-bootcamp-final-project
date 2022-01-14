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
        assert.equal(manager, accounts[0])
    })

    it('should not let non manager to start lottery', async () => {
        let instance = await Lottery.deployed();
        try {
            await instance.startLottery({ from: accounts[1] })
        } catch (e) {

        }
        let lottery_state = await instance.lottery_state();
        // await instance.enter({ from: accounts[1], value: web3.utils.toWei('1', 'ether') })
        // await instance.enter({ from: accounts[2], value: web3.utils.toWei('1', 'ether') })
        // await instance.enter({ from: accounts[3], value: web3.utils.toWei('1', 'ether') })
        assert.equal(lottery_state, 1)
        // let balance = await instance.getBalance({ from: accounts[0] });
        // assert.equal(web3.utils.toWei('3', 'ether'), getBalance.toString());
    })

    it('should set lottery state to open', async () => {
        let instance = await Lottery.deployed();
        await instance.startLottery({ from: accounts[0] })
        let lottery_state = await instance.lottery_state();
        assert.equal(lottery_state, 0)

    })

    it('should return number of players entering the lottery', async () => {
        let instance = await Lottery.deployed();
        await instance.enter({ from: accounts[1], value: web3.utils.toWei('1', 'ether') });
        let players = instance.players(1);
        assert(players(0), accounts[1])

        // it('allows account to return balance of the contract', async () => {
        //     let instance = await Lottery.deployed();
        //     await instance.enter({ from: accounts[1], value: web3.utils.toWei('1', 'ether') });
        //     let balance = await instance.getBalance({ from: accounts[0] });
        //     assert.equal('1000000000000000000', balance.toString());
        // })

    })


