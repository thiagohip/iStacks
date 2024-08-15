import axios from "axios";

export const api = axios.create({
    baseURL: "http://200.128.156.71:8000/api",
    headers: {
        'Content-Type': 'application/json',
    }
})