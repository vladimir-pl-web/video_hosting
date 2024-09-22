import { FC } from "react"
import classes from './Header.module.scss'

const Header:FC = ()=>{
    return <header className={classes.header}>
        <div></div>
        <div>Search</div>
        <div>buttons</div>
    </header>
}
export default Header