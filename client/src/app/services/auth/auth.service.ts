
import { axiosClassic } from '../../api/interceptors'
import { IUserData } from '../../types'
import { removeTokenFromStorage, saveUSerToLovalStorage } from './auth.helper'

export class AuthService {
  async login(email: string, password: string) {
    const res = await axiosClassic.post<IUserData>('auth/login', {
      email,
      password
    })
    if (res.data.accessToken ) {
      saveUSerToLovalStorage(res.data)
    }
    return res
  }
  async register(email: string, password: string) {
    const res = await axiosClassic.post<IUserData>('auth/register', {
      email,
      password
    })
    if (res.data.accessToken) {
      saveUSerToLovalStorage(res.data)
    }

    return res
  }

  async logout(email: string) {
    const res = await axiosClassic.post('auth/logout', { email })
    if (res) {
      removeTokenFromStorage()
      localStorage.removeItem('user')
    }
  }
}

export const Auth = new AuthService()
