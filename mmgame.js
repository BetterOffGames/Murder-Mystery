//This handles all of the game logic for a single room

//var roomName;
//var murderersPerRound;
//var roomCapacity;

//var inRound = false;
//var roomOccupants;
//var murderers;
//var innocents;



//socket.on(adduser)
//roomOccupants += 1;
//if(inRound = true) {
//set newUsers gameRole to "innocent";


//socket.on(disconnect)
//roomOccupants -= 1;
//if (roomOccupants === 1) make that player the host
//this next one might happen automatically
//if (roomOccupants === 0) remove the room from rooms[] in the server


//socket.on(startround) 
    //inRound = true;
    //
    //foreach murderersPerRound set a users game role to "murderer"


//socket.on(playerIsOut) {
//if their gameRole was "murderer" decrease murderers by one
//if their gameRole was "innocent" decrease innocents by one
//change their gameRole to "out"
//if murderers or innocents === 0
//socket.emit(endRound)


//socket.on(endround) {
    //if(innocents !== 0) {
        //send all players to an INNOCENT VICTORY SCREEN
    //else {
        //send all players to a MURDERER VICTORY SCREEN
    //}
    //set each users gameRole to "out";
    //send all players to the PREGAME SCREEN
//}