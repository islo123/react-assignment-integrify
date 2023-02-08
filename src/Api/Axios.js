import axios from "axios";
  export const api = axios.create({
    baseURL: "https://todo-app-1234/todo"
  })