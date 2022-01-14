// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;

contract Lottery {
    address payable[] public players;
    address public manager;
    address payable public winner;

    enum LOTTERY_STATE {
        OPEN,
        CLOSED,
        CALCULATING_WINNER
    }
    LOTTERY_STATE public lottery_state;

    constructor() public {
        lottery_state = LOTTERY_STATE.CLOSED;
        manager = msg.sender;
    }

    function enter() public payable {
        require(lottery_state == LOTTERY_STATE.OPEN);
        require(msg.sender != manager);
        require(msg.value >= 0.001 ether, "Not enough to enter");
        players.push(msg.sender);
    }

    function startLottery() public {
        require(
            lottery_state == LOTTERY_STATE.CLOSED,
            "Cannot start a new lottery yet"
        );
        require(msg.sender == manager);
        lottery_state = LOTTERY_STATE.OPEN;
    }

    // helper function that returns a big random integer
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

    function pickWinner() public returns (address) {
        lottery_state = LOTTERY_STATE.CALCULATING_WINNER;

        // only the manager can pick a winner if there are at least 3 players in the lottery
        require(msg.sender == manager);
        require(players.length >= 3);

        uint256 r = random();
        // computing a random index of the array
        uint256 index = r % players.length;

        winner = players[index]; // this is the winner
        return winner;
    }

    function rewardWinner() public {
        uint256 managerFee = (getBalance() * 10) / 100; // manager fee is 10%
        uint256 winnerPrize = (getBalance() * 90) / 100; // winner prize is 90%

        // transferring 90% of contract's balance to the winner
        winner.transfer(winnerPrize);

        // transferring 10% of contract's balance to the manager
        payable(manager).transfer(managerFee);
    }

    function endLottery() public {
        require(
            lottery_state == LOTTERY_STATE.CALCULATING_WINNER,
            "Winner not yet announced"
        );
        // resetting the lottery for the next round
        players = new address payable[](0);
        lottery_state = LOTTERY_STATE.CLOSED;
    }

    // returning the contract's balance in wei
    function getBalance() public view returns (uint256) {
        // only the manager is allowed to call it
        require(msg.sender == manager);
        return address(this).balance;
    }
}
