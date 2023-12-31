export const validateLoginForm=({mail,password}) => {
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);


    return isMailValid && isPasswordValid;
}

export const ValidateRegisterForm = ({mail,password,username}) => {
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);
    const isUsernameValid = validateUsername(username);
    
    return isMailValid && isPasswordValid && isUsernameValid;
}


const validatePassword = (password) => {
    return password.length > 5 && password.length < 12;
}

export const validateMail =(mail) => {
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailPattern.test(mail);
}

const validateUsername = (username) => {
    return username.length > 2 && username.length < 13;
}