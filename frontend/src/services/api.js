import axios from 'axios';
//Base URL for the backend API
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/auth';
//Create axios instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type' : 'application/json'
    }
});
//Add token to requests automatically
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},
(error) => {
    return Promise.reject(error);
});

//API functions
//Register new user
export const register = async(userData) => {
    const response = await api.post('/register', userData);
    if(response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
};
//Login user
export const login = async(credentials) => {
    const response = await api.post('/login', credentials);
    if(response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
};
//Get current user
export const getCurrentUser = async() => {
    const response = await api.get('/me');
    return response.data;
};
//Update user details
export const updateUserDetails = async(userData) => {
    const response = await api.put('/updatedetails', userData);
    if(response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
};
//Update password
export const updatePassword = async(passwords) => {
    const response = await api.put('/updatepassword', passwords);
    if(response.data.token) {
        localStorage.setItem('token', response.data.token);
    }
    return response.data;
};
//Logout 
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return api.get('/logout');
};
//Get all users(admin only)
export const getAllUsers = async() => {
    const response = await api.get('/users');
    return response.data;
};
export default api;