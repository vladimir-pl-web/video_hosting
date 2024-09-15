import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useState } from "react"

interface IData{
user:{
    email: string,
    _id: string
} | null,
accessToken: string,

}

interface IContext extends IData{
    setData: null | Dispatch<SetStateAction<IData>>
    }

export const AuthContext= createContext({} as IContext)


const AuthProvider:FC<PropsWithChildren<unknown>> = ({children})=>{
    const[data, setData] = useState<IData>({
       user:null,
       accessToken: '' 
    })
    return <AuthContext.Provider value={{...data, setData}}>
        {children}
        </AuthContext.Provider>
}

export default AuthProvider