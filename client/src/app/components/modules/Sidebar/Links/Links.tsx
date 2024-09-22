
import { FC } from "react"
import { ILink } from "./types"
import List, { ListItem } from "@material-tailwind/react/components/List"
import classes from './Link.module.scss'
import Link from 'next/link'
import clsx from 'clsx'

interface ILinks{
    links: ILink[]
}
const Links:FC<ILinks> = ({links}) => {

    return <List className={classes.list}>
        {
            links.map((el)=>{
                return(
                    <Link
                        key={el.name} 
                        href={el.url}                    
                    >
                        <ListItem
                        className={clsx(classes.link, "hover:!bg-blue-gray-100")}
                        >
                        {el.icon}
                        {el.name}
                        {el.info && <span className="text-red font-bold pl-2">{el.info}</span>}
                    </ListItem>
                    </Link>

                )
            })
        }
        
    </List>
}

export default  Links