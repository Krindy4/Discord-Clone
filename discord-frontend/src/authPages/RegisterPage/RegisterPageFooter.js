import React from 'react'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../shared/components/RedirectInfo'
import {useNavigate} from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormNotValidMessage =() => {
    return 'Username 3-12, password 6-12'
}

const getFormValidMessage = ()=> {
    return 'Press to Register';
}


const RegisterPageFooter = ({handleRegister, isFormValid}) => {

    const Navigate = useNavigate();

    const handlePushToLoginPage =() =>{
        Navigate("/login");
    };


  return (
    <>
    <Tooltip
    title ={!isFormValid?getFormNotValidMessage(): getFormValidMessage()}
    >
    <div>
        <CustomPrimaryButton 
            label= "Register"
            additionalStyles={{marginTop :'30px'}}
            disabled={!isFormValid}
            onClick={handleRegister}
        />
      
    </div>
    </Tooltip>
        <RedirectInfo 
        text =" "
        redirectText= 'Already have an account?'
        additionalStyles={{marginTop : '5px'}}
        redirectHandler={handlePushToLoginPage}
        />
    </>
  )
}

export default RegisterPageFooter

