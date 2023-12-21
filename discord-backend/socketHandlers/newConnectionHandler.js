const serverStore = require("../serverStore");
const friendsUpdate = require("../socketHandlers/updates/friends");
const roomsUpdate = require("./updates/rooms");

const newConnectionHandler = async (socket, io) => {
    const userDetails = socket.user;
    
    serverStore.addNewConnectedUser({
        socketId : socket.id,
        userId : userDetails.userId,
    });

//updating pending invitation list
friendsUpdate.updateFriendsPendingInvitations(userDetails.userId);

//update Friends list
friendsUpdate.updateFriends(userDetails.userId);

//updating the rooms update
setTimeout(() => {
    roomsUpdate.updateRooms(socket.id);
},[500]);

};

module.exports = newConnectionHandler;