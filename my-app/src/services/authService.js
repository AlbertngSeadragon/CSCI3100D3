import axios from "axios";

const API_URL = "http://localhost:8082/api/users/";

class AuthService {
  //send email and password to backend to check and return response data that backend send
  login(email, password) {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  //remove user object from local storage
  logout() {
    localStorage.removeItem("user");
  }

  //send to backend name, email, and password for registration
  register(name, email, password, password2) {
    return axios.post(API_URL + "register", {
      name,
      email,
      password,
      password2
    });
  }

  //get object named user from local storage \
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
