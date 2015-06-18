//This handles all of the game logic for a single room

//var roomName;
//var roomJoinable = true;
//var murderersPerRound;
//var roomCapacity;

//var inRound = false;
//var roomOccupants;
//var murderers;
//var innocents;


  //////////
 //Events//
//////////

//socket.on(adduser)
//roomOccupants += 1;
//if(inRound = true) {
//set newUsers gameRole to "innocent";

//socket.on("chatMessage") function(message){
    //broadcast"chatMessage(message);
}

//socket.on(disconnect)
//roomOccupants -= 1;
//if (roomOccupants === 1) make that player the host




  ////////////////////////
 //In round only Events//
////////////////////////

//socket.on(startround)
    //emit"showGameHtml"
    //inRound = true;
    //foreach player in room set their gameRole to "innocent"
    //foreach murderersPerRound set a random users game role to "murderer"
    
    //socket.on(playerIsOut) function(playerName) {
        //if their gameRole was "murderer" decrease murderers by one
        //if their gameRole was "innocent" decrease innocents by one
        //change playerName.gameRole to "out"
    //if murderers or innocents === 0
        //socket.emit(endRound)


//socket.on(endround) {
    //if(innocents !== 0) {
        //broadcast"chatMessage" ("Innocents Win!")
    //else {
        //broadcast"chatMessage" ("Murderers Win!")
    //}
    //for each player in the room set gameRole to "out";
//}