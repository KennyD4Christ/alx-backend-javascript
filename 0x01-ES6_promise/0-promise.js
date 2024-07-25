const getResponseFromAPI = () => {
  return new Promise((resolve) => {
    resolve({ status: 200, body: 'photo-profile-1' });
  });
};

export default getResponseFromAPI;
