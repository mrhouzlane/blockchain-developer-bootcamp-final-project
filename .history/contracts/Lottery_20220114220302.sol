// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

//@title A lottery game
//@author R. Mehdi
//@notice You can use this contract for only the most basic simulation
//@dev All function calls are currently implemented without side effects
//@custom:experimental Experimental contract

contract Lottery is Ownable {
    address payable[] public players;
    //address public manager;
    address payable public winner;

    enum LOTTERY_STATE {
        OPEN,
        CLOSED,
        CALCULATING_WINNER
    }
    LOTTERY_STATE public lottery_state;

    event MoneySent(address, uint256, address, uint256);

    constructor() {
        lottery_state = LOTTERY_STATE.CLOSED;
        // manager = msg.sender;
    }

    //@notice Changes the status of lottery to open
    function startLottery() public {
        // require(msg.sender == manager, "only manager can start lottery");
        require(
            lottery_state == LOTTERY_STATE.CLOSED,
            "Cannot start a new lottery yet"
        );

        lottery_state = LOTTERY_STATE.OPEN;
    }

    //@notice Add the players to the lottery array
    function enter() public payable {
        require(lottery_state == LOTTERY_STATE.OPEN);
        require(msg.sender != owner());
        require(msg.value >= 0.001 ether, "Not enough to enter");
        players.push(payable(msg.sender));
    }

    //@notice Returns a big random integer
    function random() public view returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encodePacked(
                        block.difficulty,
                        block.timestamp,
                        players.length
                    )
                )
            );
    }

    //@notice Returns the address of the winner of the lottery
    function pickWinner() public onlyOwner returns (address) {
        lottery_state = LOTTERY_STATE.CALCULATING_WINNER;

        // only the manager can pick a winner if there are at least 3 players in the lottery
        //require(msg.sender == manager);
        require(players.length >= 3);

        uint256 r = random();
        // computing a random index of the array
        uint256 index = r % players.length;

        winner = players[index]; // this is the winner
        return winner;
    }

    //@notice Transfers 95% of the lottery balance to the winner and 5% to the owner
    function rewardWinner() public onlyOwner {
        uint256 ownerFee = (address(this).balance * 5) / 100; // owner fee is 5%
        uint256 winnerPrize = (address(this).balance * 95) / 100; // winner prize is 95%

        // transferring 90% of Balance of contract to the winner
        winner.transfer(winnerPrize);

        // transferring 10% of Balance of contract to the owner
        payable(owner()).transfer(ownerFee);
        emit MoneySent(winner, winnerPrize, owner(), ownerFee);
    }

    //@notice Reset the lottery
    function endLottery() public {
        // resetting the lottery for the next round
        players = new address payable[](0);
        winner = payable(address(0));
        lottery_state = LOTTERY_STATE.CLOSED;
    }

    //@notice Eeturns the balance of the lottery
    function getAmount() public view onlyOwner returns (uint256) {
        return address(this).balance;
    }
}
