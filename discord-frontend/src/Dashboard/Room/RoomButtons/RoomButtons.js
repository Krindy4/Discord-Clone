import React from 'react';
import {styled} from "@mui/system";
import CameraButton from './CameraButton';
import MicButton from './MicButton';
import ScreenShareButton from './ScreenShareButton';
import CloseRoomButton from './CloseRoomButton';
import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/roomActions';

const Maincontainer = styled("div")({
    height : "15%",
    width :"100%",
    backgroundColor : '#5865f2',
    borderTopLeftRaidus : '8px',
    borderTopRightRadius : '8px',
    display :'flex',
    alignTracks :'center',
    justifyContent : 'center',
});

const RoomButtons = (props) => {

  const {localStream,isUserJoinedWithOnlyAudio } = props;

  return (
    <Maincontainer>
        {!isUserJoinedWithOnlyAudio && <ScreenShareButton {...props} />}
        <MicButton localStream={localStream} />
        <CloseRoomButton />
        {!isUserJoinedWithOnlyAudio && <CameraButton localStream={localStream} />}
    </Maincontainer>
  );
};


const mapStoreStateToProps =({room})=>{
  return {
    ...room,
  }
}

const mapActionsToProps = (dispatch)=> {
  return{
    ...getActions(dispatch)
  };
};

export default connect(mapStoreStateToProps,mapActionsToProps)( RoomButtons);
