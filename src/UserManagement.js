const createUser = (token) => {
  sessionStorage.setItem('token', token);
}

const destroyUser = () => {
  sessionStorage.removeItem('token');
}

const getToken = () => {
  return sessionStorage.getItem('token');
}

const isAuthenticated = () => {
  // const token = sessionStorage.getItem('token');
  // if (token !== null) return token.length > 10;
  // else return false;

  return true
}

export {createUser, destroyUser, getToken, isAuthenticated};
