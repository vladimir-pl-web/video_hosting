import axios from "axios";
import { getContentType } from "./helper";
import Cookies from 'js-cookie'

export const axiosClassic = axios.create({
    baseURL: process.env.APP_SERVER_URL,
    headers: getContentType()
})

const instance = axios.create({
    baseURL: process.env.APP_SERVER_URL,
    headers: getContentType() 
})

instance.interceptors.request.use(config=>{
 const accessToken = Cookies.get("accessToken")

 if(config.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`
 return config
})