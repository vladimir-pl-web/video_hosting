
import { FC, PropsWithChildren } from "react"
import Header from "../Header/Header"
import classes from './LayoutContent.module.scss'
import clsx from "clsx"

const LayoutContent:FC<PropsWithChildren<unknown>> = ({children})=>{
    return  <div className={clsx(classes.content, 
    )}>
    <Header />
    {children}
  </div>
}

export default LayoutContent