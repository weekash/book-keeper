import axios from "axios"
import { AxiosResponseType } from "../interface/base.type"

export const AUTH_URL=`/api/auth`

export async function login(email:string, password:string):Promise<AxiosResponseType<any>>{
    return await axios.post(`${AUTH_URL}/signin`,{email, password})
}

export async function signUp(name:string, email:string, password:string):Promise<AxiosResponseType<any>>{
    return await axios.post(`${AUTH_URL}/signup`,{name, email, password})
}

export async function getCurrentUser():Promise<AxiosResponseType<any>>{
    return await axios.get(`${AUTH_URL}/me`)
}