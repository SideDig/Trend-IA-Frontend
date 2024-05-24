import axios from "axios";

const instance = axios.create({
    baseURL: "https://trend-ia.onrender.com",
    withCredentials: true
})

export default instance;