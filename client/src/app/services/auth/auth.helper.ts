import Cookies from 'js-cookie'
import { IUserData } from '../../types'

export const saveTokenToStorage = (token: string)=>{
    Cookies.set('accessToken', token)
}

export const removeTokenFromStorage = ()=>{
    Cookies.remove('accessToken')
}

export const saveUSerToLovalStorage = (data:IUserData)=>{
    saveTokenToStorage(data.accessToken)
    localStorage.setItem('user', JSON.stringify(data.user))
}