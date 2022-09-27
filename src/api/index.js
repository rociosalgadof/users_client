import axios from "axios";

const url = "https://salty-atoll-74462.herokuapp.com";

export const getUsers = () => axios.get(url);
export const deleteUser = (id) => axios.delete(`${url}/${id}`);

