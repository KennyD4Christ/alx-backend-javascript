// 6-payment_token.js
function getPaymentTokenFromAPI(success) {
  return new Promise((resolve) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      resolve(); // Resolve with undefined
    }
  });
}

module.exports = getPaymentTokenFromAPI;
