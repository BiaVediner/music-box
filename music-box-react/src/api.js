import axios from "axios";

const api = axios.create({
    baseURL: "https://62423a5bd126926d0c4f2c6e.mockapi.io/music"
})

export default api;