import axios from 'axios';

const setAuthToken = token => {
    console.log("ATTEMPTING TO SET HEADERS")
    if(token) {
        axios.defaults.headers.common['x-auth-token'] = token;
        console.log("AUTH TOKEN SET")
        console.log(token)
        console.log(axios.defaults.headers.common["x-auth-token"]);
    } else{
        delete axios.defaults.headers.common["x-auth-token"]; 
        console.log("NO TOKEN FOUND");

    }
}

export default setAuthToken;