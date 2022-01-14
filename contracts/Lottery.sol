// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

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

    function startLottery() public {
       // require(msg.sender == manager, "only manager can start lottery");
        require(
            lottery_state == LOTTERY_STATE.CLOSED,
            "Cannot start a new lottery yet"
        );

        lottery_state = LOTTERY_STATE.OPEN;
    }

    function enter() public payable {
        require(lottery_state == LOTTERY_STATE.OPEN);
        require(msg.sender != owner());
        require(msg.value >= 0.001 ether, "Not enough to enter");
        players.push(payable(msg.sender));
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

    function rewardWinner() public onlyOwner {
        //require(msg.sender == manager);
        uint256 ownerFee = ( address(this).balance * 10) / 100; // manager fee is 10%
        uint256 winnerPrize = ( address(this).balance * 90) / 100; // winner prize is 90%

        // transferring 90% of contract's balance to the winner
        winner.transfer(winnerPrize);

        // transferring 10% of contract's balance to the manager
        payable(owner()).transfer(ownerFee);
        emit MoneySent(winner, winnerPrize, owner(), ownerFee);

    }

    

    function endLottery() public {
        //require(
            //lottery_state == LOTTERY_STATE.CALCULATING_WINNER,
           // "Winner not yet announced"
        //);
        // resetting the lottery for the next round
        players = new address payable[](0);
        winner = payable(address(0));
        lottery_state = LOTTERY_STATE.CLOSED;
    }

}

