import axios from "axios";

const api = axios.create({
    // baseURL: 'http://localhost:3333'
    baseURL: process.env.EXPO_PUBLIC_IP_URL})

export {api};