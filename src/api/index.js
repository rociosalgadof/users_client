import axios from "axios";

const url = "http://localhost:5000";

export const getUsers = () => axios.get(url);
export const deleteUser = (id) => axios.delete(`${url}/${id}`);

