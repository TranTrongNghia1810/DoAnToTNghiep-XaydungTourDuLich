import axios from 'axios';

const postCreateAccount = (username,password,role) => {
    const data = new FormData();
    data.append('username', username);
    data.append('password', password);
    data.append('role', role);
    return axios.post()
}

export {postCreateAccount};