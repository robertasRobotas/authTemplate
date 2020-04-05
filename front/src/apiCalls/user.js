import axios from 'axios';

const getUserData = async () =>
  await axios.get('http://localhost:8085/api/user/getUser', {
    withCredentials: true,
  });

export { getUserData };
