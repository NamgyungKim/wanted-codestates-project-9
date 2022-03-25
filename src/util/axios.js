import axios from 'axios';

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

// 주소API
const addressApi = axios.create({
  baseURL: 'https://www.juso.go.kr/addrlink',
  params: {
    currentPag: 1,
    countPerPag: 10,
    resultType: 'json',
    confmKey: accessToken,
  },
});

export const getAddressAxios = async searchWord => {
  try {
    const response = await addressApi.get(
      `addrLinkApi.do?keyword=${searchWord}`,
    );
    const {
      results: { juso: data },
    } = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 케어닥API
// const caredocApi = axios.create({
//   baseURL: 'https://caredoc-fe-server.herokuapp.com',
// });
// export const staticData = async (data) => {
//   try {
//     const response = await caredocApi.post('/application');
//     const data = response.data;
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
