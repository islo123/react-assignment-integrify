import axios from "axios";
  export const api = axios.create({
    baseURL: "https://todo2-app-backend.onrender.com/todo/"
  })