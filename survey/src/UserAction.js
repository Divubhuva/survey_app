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





export {login, isUserLogin, logout}
