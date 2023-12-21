import React from 'react';
import { Tooltip } from '@mui/material';
import Avatar from '../../shared/components/Avatar';
import Button from "@mui/material/Button"
import * as roomHandler from "../../realtimeCommunication/roomHandler";

const ActiveRoomButton = ({
    creatorUsername,
    roomId,
    amountOfParticipants,
    isUserInRoom,
}) => {

    const hanldeJoinActiveRoom = () => {
        if(amountOfParticipants <4 ){
            roomHandler.joinRoom(roomId);
        }
    }

    const activeRoomButtonDiabled = amountOfParticipants>3;
    const roomTitle = `Creator : ${creatorUsername}. Connected : ${amountOfParticipants}`;

  return (
    <Tooltip title  ={roomTitle}>
      <div>
        <Button 
        style ={{
            width : '48px',
            height : '48px',
            borderRadius : '16px',
            margin : 0,
            padding : 0,
            minWidth : 0,
            marginTop : '10px',
            color : 'white',
            backgroundColor : '#5865F2',
        }}
        disabled={activeRoomButtonDiabled || isUserInRoom} 
        onClick={hanldeJoinActiveRoom}
        >
            <Avatar username ={creatorUsername} />
        </Button>
      </div>
    </Tooltip>
  )
}

export default ActiveRoomButton
