import axios from 'axios';
import history from '../history';

const getUserData = async () => {
  await axios
    .get('http://localhost:8085/api/user/getUser', {
      withCredentials: true,
    })
    .then((res) => {
      localStorage.setItem('userData', JSON.stringify(res.data.user));
    })
    .catch((err) => {
      console.log('getUserData, unable to get data');
      if (err.response.status === 401) {
        history.push('/login');
      }
    });
};

const loginCheck = async () => {
  await axios
    .get('http://localhost:8085/api/user/loginCheck', {
      withCredentials: true,
    })
    .catch((err) => {
      console.log('loginCheck, unable to get userData');

      if (err.response.status === 401) {
        history.push('/login');
      }
    });
};

export { getUserData, loginCheck };
