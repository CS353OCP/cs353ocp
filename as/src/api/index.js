import axios from 'axios';

//const url = 'https://53f67aea-4f4a-4e73-843c-744f85182334.mock.pstmn.io'
//const url ='https://localhost:5000/api/places'
const url ='http://127.0.0.1:5000'

export const createUser = (newUser)=>axios.post(url + "/places", newUser)
    .then((response) => {
       console.log("asd");
    }).then((response) => {
        console.log(response);
    }, (error) => {
        console.log(error);
    });
export const loginReq = async (email,password)=>axios.post(url + "/login", {
    email: email,
    password: password
}).then((response) => {
    console.log(response);
    return response;
});
export  const  getEvents = ()=>axios.get(url+"/events")
    .then((response) => {
        console.log(response);
        return response.data;
    });

export  const  getUser = (id)=>axios.get(url+"/profile",{
    id:id,
})
    .then((response) => {
        console.log(response);
        return response.data;
    });
export  const  getNearEvents = ()=>axios.get(url+"/nearEventsList")
    .then((response) => {
        console.log(response);
        return response.data;
    });

export  const  getPlaces = ()=>axios.get(url+"/places")
    .then((response) => {
        console.log(response);
        return response.data;
    });
export  const  getFriends = ()=>axios.get(url+"/places")
    .then((response) => {
        console.log(response);
        return response.data;
    });

/*export  const  login = (email,password)=>axios.post(url+"/places")
    .then((response) => {
        console.log(response);
        return response.data;
    });*/
export  const   register = async (name, age, email,password)=>axios.post(url+"/register", {
    name: name,
    age: age,
    email: email,
    password: password
})
    .then((response) => {
        console.log(response);
        return response.data;
    });
