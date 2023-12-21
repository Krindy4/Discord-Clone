import React from 'react';
import { Typography } from '@mui/material';

const FriendsTitle = ({title}) => {
  return (
    <Typography
        sx={{
            textTransform : "uppercase",
            color : "#9e9297",
            fontSize : '13px',
            marginTop :'10px'
        }}
    >
      {title}
    </Typography>
  );
};

export default FriendsTitle
