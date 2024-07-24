// Function to sign up a user
function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({
      firstName,
      lastName
    });
  });
}

export default signUpUser;
