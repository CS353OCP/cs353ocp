import axios from 'axios';

//const url = 'https://53f67aea-4f4a-4e73-843c-744f85182334.mock.pstmn.io'
//const url ='https://localhost:5000/api/places'
const url ='http://127.0.0.1:5000/places'

export const createUser = (newUser)=>axios.post(url, newUser)
    .then((response) => {
       console.log("asd");
    }).then((response) => {
        console.log(response);
    }, (error) => {
        console.log(error);
    });
//export const login = (newUser)=>axios.post(url, newUser);

