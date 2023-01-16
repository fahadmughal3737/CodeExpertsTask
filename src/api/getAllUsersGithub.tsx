

import axios, {AxiosRequestConfig} from 'axios';

export const GetAllGithubUsers = async () => {
  return new Promise((resolve, reject) => {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `https://api.github.com/users`,
    };
    axios(config)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error.response);
      });
  });
};
