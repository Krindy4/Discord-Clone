import React from 'react';
import { Typography } from '@mui/material';
import { connect } from 'react-redux';

const chosenOptionLabel = ({name}) => {
  return (
    <Typography
        sx ={{fontSize : '16px',color : 'white', fontWeight :'bold'}}
    >
      {`${name ? `Chosen Conversation : ${name}` : ""}`}
    </Typography>
  );
};

const mapStoreStateToProps = (state) => {
    return{
        name : state.chat.chosenChatDetails?.name,
    };
};

export default connect(mapStoreStateToProps)(chosenOptionLabel);
