import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllWalks = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/walks.json`)
    .then((result) => {
      const allWalksObj = result.data;
      const walks = [];
      if (allWalksObj != null) {
        Object.keys(allWalksObj).forEach((walkId) => {
          const newWalk = allWalksObj[walkId];
          newWalk.id = walkId;
          walks.push(newWalk);
        });
      }
      resolve(walks);
    })
    .catch((err) => {
      reject(err);
    });
});

const saveNewWalk = (walkInfo) => axios.post(`${baseUrl}/walks.json`, walkInfo);

const deleteWalk = (walkId) => axios.delete(`${baseUrl}/walks/${walkId}.json`);

const updateWalk = (walkId, newWalkInfo) => axios.put(`${baseUrl}/walks/${walkId}.json`, newWalkInfo);

export default {
  getAllWalks,
  saveNewWalk,
  deleteWalk,
  updateWalk,
};
