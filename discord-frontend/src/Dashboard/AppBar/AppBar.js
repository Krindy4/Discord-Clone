import React from 'react';
import {styled} from "@mui/system";
import DropdownMenu from "./DropdownMenu";
import ChosenOptionLabel from "./chosenOptionLabel";

const MainContainer = styled('div')({
    position : 'absolute',
    right : '0',
    top :'0',
    height : '48px',
    backgroundColor :'#36393f',
    width : "calc(100% - 325px)",
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'space-between',
    padding : '0 15px',
})

const AppBar = () => {
  return <MainContainer>
    <ChosenOptionLabel />
    <DropdownMenu />
  </MainContainer>
  
}

export default AppBar
