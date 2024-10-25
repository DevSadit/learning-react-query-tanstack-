import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getUsers = async () => {
  const res = await api.get("/users");
  return res.status === 200 ? res.data : [];
};
