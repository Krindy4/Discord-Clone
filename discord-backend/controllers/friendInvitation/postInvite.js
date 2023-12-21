const User = require('../../models/user');
const FriendInvitation = require('../../models/friendInvitation');
const friendsUpdate = require('../../socketHandlers/updates/friends')

const postInvite = async (req,res) => {
    const {targetMailAddress} = req.body;

    const {userId, mail} = req.user;

    //checking if the friend is not a user
    if(mail.toLowerCase() === targetMailAddress.toLowerCase()){
        return res.status(409).send("Sorry. You cannot become friend with yourself");
    }

    const targetUser = await User.findOne({
        mail : targetMailAddress.toLowerCase(),
    });

    if(!targetUser){
        return res.status(404).send(`Friend of ${targetMailAddress} has not been found. Please check the user address`);
    }

    //checking if the invitation has already been sent
    const invitationAlreadyReceived = await FriendInvitation.findOne({
        senderId : userId,
        receiverId : targetUser._id,
    });

    if(invitationAlreadyReceived){
        return res.status(409).send("This person has already received your invitation");
    }

    //checking if the invited person is already ourt friend
    const usersAlreadyFriends = targetUser.friends.find(friendId => 
        friendId.toString() === userId.toString()
    );

    if (usersAlreadyFriends){
        return res.status(409).send("This person is already in your friends list");
    };
    
    //Creating new Invitation
    const newInvitation = await FriendInvitation.create({
        senderId : userId,
        receiverId : targetUser._id,
    });

    friendsUpdate.updateFriendsPendingInvitations(targetUser._id.toString());
    //checking if invitation has been succesfully sent 
    
    return res.status(201).send("Invitation has been sent");
    
};

module.exports = postInvite;