export default function authHeader() {
  //get object named user from local storage 
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    //if user and token of the user is not null returning Authorization as a user.token
    return { 'Authorization': user.token };       // for Node.js Express back-end
  } else {
    return {};
  }
}
