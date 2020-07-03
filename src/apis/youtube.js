import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});

/* Starting with release v0.19.0 there is a bug that fails to merge 
the parameters from the config instance. This will cause a 400 error 
failure with the message "Required Parameter : part"
To deal with this I had to move the Params Object to the App.js axios call.*/
