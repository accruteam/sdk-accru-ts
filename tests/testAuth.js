require('dotenv').config();

async function getAuthToken() {
  const body = JSON.stringify({
    email: process.env.USERNAME,
    password: process.env.PASSWORD,
    returnSecureToken: true,
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
    redirect: 'follow',
  };

  const res = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_WEB_API_KEY}`,
    requestOptions,
  );
  const { idToken } = await res.json();
  return idToken;
}

module.exports = {
  getAuthToken,
};
