const FriendInvitation = require("../../models/friendInvitation");
const User = require("../../models/user");
const friendsUpdates = require("../../socketHandlers/updates/friends")


const postAccept = async (req,res) => {

    try{
        const {id} = req.body;

        const invitation = await FriendInvitation.findById(id);

        if(!invitation){
            return res.status(401).send("Error occured. Please try again");
        }

        const {senderId, receiverId} = invitation;

        //adding frineds to both the users
        const senderUser = await User.findById(senderId);
        senderUser.friends= [...senderUser.friends, receiverId ];

        const receiverUser = await User.findById(receiverId);
        receiverUser.friends= [...receiverUser.friends, senderId ];

        await senderUser.save();
        await receiverUser.save();

        //deleting invitation
        await FriendInvitation.findByIdAndDelete(id);

        //updating the list of frineds if the user is online
        friendsUpdates.updateFriends(senderId.toString());
        friendsUpdates.updateFriends(receiverId.toString());

        //updating the list of pending invitation
        friendsUpdates.updateFriendsPendingInvitations(receiverId.toString());

        return res.status(200).send("Friend Successfully added");


    }catch(err){
        console.log(err);
        return res.status(500),send("Something went wrong please try again.");
    }
}
module.exports = postAccept;