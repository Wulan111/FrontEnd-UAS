import axios from "axios";

const API_URL = "http://localhost:3006/";

class AuthService {
  async login(email, password) {
    const response = await axios
          .post(API_URL + "login", {
              email,
              password
          });
      if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data.token));
      }
      console.log(response);
      return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, email, password) {
    return axios.post(API_URL + "register", {
      name,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();