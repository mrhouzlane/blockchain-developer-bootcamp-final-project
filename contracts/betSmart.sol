pragma solidity ^0.5.16;

//A player bets an amount on a team 1,2 or X(tie = 3) 
//Every issue 1 , 2 or 3 has a pool : TotalPool 1 ,2 ,3 etc 
// new concept of betting where everyone participates to the pool by his bets and not betting for himself 

contract betSmart { 
    uint public minimumBet; // minimum bet allowed
    uint public poolTeam1; //stakes of team one
    uint public poolTeam2; //stakes of team two
    uint public PoolX ; //stakes of a tie
    uint public maxTotalBets= 25000;
    uint public totalwins;
    
    // List containing the address of the players who made a bet 
    address payable [] public betters ;
    
    //What the player can do ? => 
    struct Better {
        uint amount; // amount bet
        uint256 teamSelect; // team selected : either 1 - 2 - 3 : team 1 / team 2 /  3 means a tie 
    }
    
    //mapping to connect the address of the player : 
    mapping (address => Better ) betterId ; 
    
    constructor() public {
        minimumBet = 100; // 0,0011 eth  = 5 dollars 
    }
    
    //now that we have initiated the defintion of a Player , let's check him :
    
    function betterExists(address better) public view returns (bool) {
        for (uint16 i=0 ; i < betters.length ; i++){
            if (betters[i] == better) return true;
            
        }
        return false ; 
    }
    
    // now we will create the function to bet : address of the player and amount that he will be 
    
    function YourBet(uint256 _choice) public payable {
        //if the player has already bet , he can't bet again , we need a player who hasn't bet yet 
        require(!betterExists(msg.sender));
        
        //amount bet > minimumBet
        require(msg.value >= minimumBet); 
        
        //only three choices possible 
        require(_choice <=3 );
        
        //selecting amount and teamselected for the player 
        betterId[msg.sender].amount = msg.value ;
        betterId[msg.sender].teamSelect = _choice ; 
        
        //add player to players array
        betters.push(msg.sender) ;
        
        
        if(_choice== 1){
            poolTeam1 += msg.value;
        }if(_choice== 2){
            poolTeam2 += msg.value;
        }if(_choice==3){
            PoolX += msg.value; 
        }else {
            
        }
        
    }
    // the _outcome is the team winner 1 or 2 or the tie X (3)
    function getRewards(uint _outcome) public {
        // list of all the bets 
        address payable [25000] memory winners ;
        
        uint16 count = 0 ;
        uint loserBet = 0 ; //couting numberoOf looses bets
        uint winnerBet = 0 ; //couting numberOf wins bets 
        
        address add ; 
        uint bet ; 
        // 
        address payable playerAddress ; 
        

        //we look for the winners
        for(uint16 i = 0; i<betters.length; i++){
            playerAddress = betters[i];
            //if the player won we add the address to the winners array
            if(betterId[playerAddress].teamSelect== _outcome){
                winners[count] = playerAddress;
                count++;
                totalwins = count; 
            }
        }
        
        //who is the winner and who is the looser ?
        if (_outcome == 1 ){
            winnerBet = poolTeam1 ;
        }if (_outcome == 2 ){
            winnerBet = poolTeam2 ;
        }else{
            winnerBet = PoolX ; 
        }
        
        
        
         //we give the prizes to the winners
        for(uint16 i = 0; i < count; i++){
            //check that the address in this array is not empty
            if(winners[i] != address(0)){
                add = winners[i];
                bet = betterId[add].amount;
                //transfer the money to the user
                winners[i].transfer((bet*(10000 +(loserBet*10000/winnerBet)))/10000);
            }
        }
        delete betterId[playerAddress]; //delete all the players
        delete betters; //delete the players array
        loserBet = 0; //reinitialize the bets
        winnerBet = 0;
        poolTeam1 = 0;
        poolTeam2= 0;
        PoolX; 
    }

    //functions for the (UI) 
    function pool1() public view returns(uint){
        return poolTeam1;
    }

    function pool2() public view returns(uint){
        return poolTeam2;
    }
    
    function pool3() public view returns(uint){
        return PoolX;
    }
    
    
  
    
    
}
        

        
        
        
        
        

        
        
        
        

        
        
    
    
    

    
    
    

