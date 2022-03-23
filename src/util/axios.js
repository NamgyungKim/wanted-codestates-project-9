import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://caredoc-fe-server.herokuapp.com',
});

export const staticData = async () => {
  try {
    const response = await instance.get('/static');
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
