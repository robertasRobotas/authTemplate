import axios from 'axios';
import history from '../history';

const getUserData = async () =>
  await axios
    .get('http://localhost:8085/api/user/getUser', {
      withCredentials: true,
    })
    .then((res) => {
      localStorage.setItem('userData', JSON.stringify(res.data.user));
    })
    .catch((err) => {
      if (err.response.status === 401) {
        history.push('/login');
      }
    });

export { getUserData };
