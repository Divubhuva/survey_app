import { USER_LOGIN_KEY, FIRSTNAME_KEY, LASTNAME_KEY, HELLO_MESSAGE, DEFAULT_USERNAME, DEFAULT_PASSWORD } from './ConstatantStrings'

function login (userName, password) { 
    if ((userName === DEFAULT_USERNAME) &&(password === DEFAULT_PASSWORD)){
        localStorage.setItem(USER_LOGIN_KEY,JSON.stringify(true));
        return true;
    }
    return false;
}


const isUserLogin = () => {
    const loginInfo = JSON.parse(localStorage.getItem(USER_LOGIN_KEY));
    if(loginInfo){
        return true;
    }
    return false;
}


const logout = () => {
    localStorage.removeItem(USER_LOGIN_KEY);
}


function updateUserInfo (firstName, lastName ) {
    localStorage.setItem(FIRSTNAME_KEY,JSON.stringify(firstName))
    localStorage.setItem(LASTNAME_KEY,JSON.stringify(lastName))
}


const getUserInfo = () => {
    const userInfoFirstName = JSON.parse(localStorage.getItem(FIRSTNAME_KEY));
    const userInfoLastName = JSON.parse(localStorage.getItem(LASTNAME_KEY));
    
    var ret = HELLO_MESSAGE ;
    if ( userInfoFirstName !== null )
    {
        ret += userInfoFirstName;
        ret += " ";  
    }
    if(userInfoLastName !== null ){
        ret += userInfoLastName; 
    }
    return ret
}


export {login, isUserLogin, logout, getUserInfo, updateUserInfo }
