import axios from 'axios';
import { dispatch } from 'react';
import { USER_UNLOADED } from '../actions/types';

const setAuthToken = token => {
    console.log("SET AUTH TOKEN : " + Date.now())
    if(token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    } else{
        delete axios.defaults.headers.common["x-auth-token"]; 
    }
}

export default setAuthToken;