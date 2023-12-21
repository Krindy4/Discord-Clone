import React from 'react';
import {styled} from "@mui/system";
import PendingInvitationsListItem from './PendingInvitationsListItem';
import { connect } from 'react-redux';


// const DUMMY_INVITAIONS =[
//     {
//         _id: '1',
//         senderId : {
//             username : 'Sanjeev',
//             mail : 'sanju@gmail.com'
//         }
//     },
//     {
//         _id: '2',
//         senderId : {
//             username : 'Joshna',
//             mail : 'joshu@gmail.com'
//         }
//     },
// ];

const MainContainer = styled('div')({
    width : "100%",
    height :"22%",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    ocerflow : "auto",
})

const PendingInvitationsList = ({pendingFriendsInvitations}) => {
  return (
    <MainContainer>
        {pendingFriendsInvitations?.map((invitation) => (
            <PendingInvitationsListItem 
                key ={invitation._id}
                id={invitation._id}
                username ={invitation.senderId.username}
                mail={invitation.senderId.mail}
            />
        ))}
    </MainContainer>
  );
};


const mapStoreStateToProps = ({friends}) => {
    return{
        ...friends,
    };
};

export default connect(mapStoreStateToProps) (PendingInvitationsList);
