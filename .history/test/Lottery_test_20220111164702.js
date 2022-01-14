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
        assert.equal(lottery_state, 1)

    })


    it('should set lottery state to open', async () => {
        let instance = await Lottery.deployed();
        await instance.startLottery({ from: accounts[0] })
        let lottery_state = await instance.lottery_state();
        assert.equal(lottery_state, 0)

    })

    it('allows account to return balance of the contract', async () => {
        let instance = await Lottery.deployed();
        await instance.enter({ from: accounts[1], value: web3.utils.toWei('1', 'ether') });
        let balance = await instance.getBalance({ from: accounts[0] });
        assert.equal('1000000000000000000', balance.toString());
    })

    it('should return number of players entering the lottery', async () => {
        let instance = await Lottery.deployed();
        await instance.enter({ from: accounts[1], value: web3.utils.toWei('1', 'ether') });
        let players = instance.players(1);
        assert(players, accounts[1])

    })

    it('should not let manager to enter lottery', async () => {
        let instance = await Lottery.deployed();
        try {
            await instance.enter({ from: accounts[0], value: web3.utils.toWei('1', "ether") })
        } catch (e) {

        }
    })

    it('should pick the winner of the Lottery', async () => {
        let instance = await Lottery.deployed();
        let randomness = await instance.random({ from: accounts[0] })
        await instance.enter({ from: accounts[1], value: web3.utils.toWei('1', 'ether') });
        let player1 = instance.players(1);
        await instance.enter({ from: accounts[2], value: web3.utils.toWei('1', 'ether') });
        let player2 = instance.players(2);
        await instance.enter({ from: accounts[3], value: web3.utils.toWei('1', 'ether') });
        let player3 = instance.players(3);
        let players = [player1, player2, player3]
        let picking = await instance.pickWinner({ from: accounts[0] })
        let winner = instance.winner()
        assert(picking, randomness % (players.length))
        assert(winner, picking)

    })


    it('should set the lottery state to CALCULATING_WINNER', async () => {
        let instance = await Lottery.deployed();
        let picking = await instance.pickWinner({ from: accounts[0] })
        let lottery_state = await instance.lottery_state();
        assert.equal(lottery_state, 2)

    })

    it('should reward the winner 90% if the balance', async () => {
        let instance = await Lottery.deployed();
        let balance = await instance.getBalance({ from: accounts[0] });
        assert.equal('3000000000000000000', balance.toString());





    })

