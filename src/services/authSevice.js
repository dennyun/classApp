import axios from '../utils/axios';

class AuthService {
    login = (email, password) => {
        return new Promise((resolve, reject) => {
          axios
            .post('/api/home/login', { email, password })
            .then((response) => {
              if (response.data.user) {
                this.setToken('JWT');
                resolve(response.data.user);
              } else {
                reject(response.data.error);
              }
            })
            .catch((error) => {
              reject(error);
            });
        });
      };
    
    loginToken = () => {
    return new Promise((resolve, reject) => {
        axios
        .post('/api/home/me') // envio o token pelo header
        .then((response) => {
            if (response.data.user) {
            resolve(response.data.user);
            } else {
            reject(response.data.error);
            }
        })
        .catch((error) => {
            reject(error);
        });
    });
    };

    logout = () => {
        this.removeToken();
    }

    setToken = (token) => {
        localStorage.setItem('acessToken', token);
    }

    getToken = () => localStorage.getItem('acessToken')

    removeToken = () => localStorage.removeItem('acessToken')

    isAuthenticated = () => {
        return !!this.getToken
    }
}

const authService = new AuthService();

export default authService;