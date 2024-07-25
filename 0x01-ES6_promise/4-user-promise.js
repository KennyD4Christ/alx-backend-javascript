// Function to sign up a user
export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({
      firstName,
      lastName,
    });
  });
}
