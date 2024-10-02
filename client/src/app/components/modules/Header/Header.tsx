import { FC } from "react"
import classes from './Header.module.scss'
import HeaderButtons from "./HeaderButtons/Header.Buttons"

const Header:FC = ()=>{
    return <header className={classes.header}>
        <div></div>
        <div>Search</div>
        <HeaderButtons />
    </header>
}
export default Header