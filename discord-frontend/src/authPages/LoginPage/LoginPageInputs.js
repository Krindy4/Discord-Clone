import React from 'react'
import InputWithLabel from '../../shared/components/InputWithLabel'

const LoginPageInputs = ({mail,setMail,password,setPassword}) => {
  return (
    <>
    <InputWithLabel 
    value = {mail}
    setValue ={setMail}
    label = 'E-mail'
    type = 'text'
    placeholder = 'Enter your e-mail'
    />
    <InputWithLabel 
    value = {password}
    setValue ={setPassword}
    label = 'Password'
    type = 'password'
    placeholder = 'Enter your password'
    />
    </>
  )
}

export default LoginPageInputs
