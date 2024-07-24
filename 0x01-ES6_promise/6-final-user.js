import signUpUser from './4-signup-user.js';
import uploadPhoto from './5-upload-photo.js';

function handleProfileSignup(firstName, lastName, fileName) {
  // Create promises for signUpUser and uploadPhoto
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  // Return a promise that resolves with an array of results
  return Promise.allSettled([signUpPromise, uploadPromise])
    .then((results) => {
      return results.map(result => ({
	status: result.status,
	value: result.status === 'fulfilled' ? result.value : result.reason
      }));
    });
}

export default handleProfileSignup;
