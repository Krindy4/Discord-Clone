const serverStore = require("../serverStore");
const roomsupdates = require("./updates/rooms");

const roomCreateHandler = (socket) => {
    console.log('Hanlding room create event');

    const socketId = socket.id;
    const userId = socket.user.userId;

    const roomDetails = serverStore.addNewActiveRoom(userId,socketId);

    socket.emit("room-create",{
        roomDetails,
    });

    roomsupdates.updateRooms();
};




module.exports= roomCreateHandler;