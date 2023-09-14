import axios from "axios";
const baseurl = 'http://localhost:3001/api'
//const baseurl = 'http://65.2.141.17/api'

const axiosinstance = axios.create({
    baseURL : baseurl,
    withCredentials:true
})

export default axiosinstance