import axios from "axios";

// const url = "https://salty-atoll-74462.herokuapp.com";

const url = "http://localhost:5000"


export const getCandidates = () => axios.get(`${url}/candidates`);
export const deleteCandidate = (id) => axios.delete(`${url}/candidates/${id}`);
export const registerUser = (user) => axios.post(`${url}/register`, user);
export const loginUser = (user) => axios.post(`${url}/login`, user, { withCredentials: true })
export const logoutUser = () => axios.get(`${url}/logout`)
export const checkUser = (user) => axios.post(`${url}/checkUser`, user);



