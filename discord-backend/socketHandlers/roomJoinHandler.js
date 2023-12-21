const serverStore = require("../serverStore");
const roomsUpdate = require("./updates/rooms");

const roomJoinHandler = (socket,data) => {
    const {roomId} = data;

    const participantDetails = {
        userId : socket.user.userId,
        socketId : socket.id,
    };

const roomDetails = serverStore.getActiveRoom(roomId);

serverStore.joinActiveRoom(roomId,participantDetails);

//sending information to users in the room for preparing for incoming connection
roomDetails.participants.forEach((participant) => {
    if(participant.socketId !== participantDetails.socketId){
        socket.to(participant.socketId).emit("conn-prepare",{
            connUserSocketId : participantDetails.socketId,
        })
    }
})

roomsUpdate.updateRooms();


};

module.exports = roomJoinHandler;