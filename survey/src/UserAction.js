function login  (userName, password) { 
    if ((userName === "admin") &&(password === "admin")){
        localStorage.setItem("userLogin",JSON.stringify(true));
        return true;

    }
    return false;
}


const isUserLogin =()=>{
    const loginInfo = JSON.parse(localStorage.getItem("userLogin"));
    if(loginInfo){
        return true;
    }
    return false;
}


const logout =()=> {
    localStorage.removeItem("userLogin");
}


function updateUserInfo (firstName, lastName ) {
    localStorage.setItem("firstname",JSON.stringify(firstName))
    localStorage.setItem("lastName",JSON.stringify(lastName))
}

const getUserInfo = () => {
    const userInfoFirstName = JSON.parse(localStorage.getItem("firstname"));
    const userInfoLastName = JSON.parse(localStorage.getItem("lastName"));
    
    var ret = "Hello, ";
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
