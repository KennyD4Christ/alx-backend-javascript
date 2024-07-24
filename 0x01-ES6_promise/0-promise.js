/**
 *  * Returns a promise that resolves to a response object.
 *   * @returns {Promise<{status: number, body: string}>}
 */
const getResponseFromAPI = () => {
  return new Promise((resolve) => {
    resolve({ status: 200, body: 'photo-profile-1' });
  });
};

export default getResponseFromAPI;
