import axios from 'axios';

const url = 'https://53f67aea-4f4a-4e73-843c-744f85182334.mock.pstmn.io'

export const createUser = (newUser)=>axios.post(url, newUser);
