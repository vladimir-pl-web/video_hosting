'use client'

import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState
} from 'react'
import { IUserData } from '../types'
import { defaultUser } from '../constant'
import Cookies from 'js-cookie'
import { Alert } from '@material-tailwind/react'
interface IContext extends IUserData {
  setData: null | Dispatch<SetStateAction<IUserData>>
  openSidebar: boolean
  setOpenSidebar: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext({} as IContext)

const UserProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [data, setData] = useState<IUserData>(defaultUser)
  const [openSidebar, setOpenSidebar] = useState<boolean>(true)

  useEffect(()=>{
    const accessToken = Cookies.get('accessToken')
    const user = JSON.parse(localStorage.getItem('user')as string)

    if(accessToken && user){
        setData({user, accessToken})
    }
  },[])

  return (
    <AuthContext.Provider
      value={{ ...data, openSidebar, setOpenSidebar, setData }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default UserProvider
