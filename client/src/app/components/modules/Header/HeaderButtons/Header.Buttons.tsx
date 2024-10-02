'use client'

import { FC } from 'react'
import classes from './HeaderButtons.module.scss'
import { IconButton, Tooltip } from '@material-tailwind/react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { RiLogoutCircleRLine } from "react-icons/ri";
import clsx from 'clsx'
import { useUser } from '../../../../hooks/useUser'
import AuthForm from '../AuthForm/AuthForm'
import { useMutation } from 'react-query'
import { Auth } from '../../../../services/auth/auth.service'
import { defaultUser } from '../../../../constant'

const HeaderButtons: FC = () => {
  const { user, setData } = useUser()
  const {mutate:onLogout} = useMutation('logout',(email:string)=> Auth.logout(email),{
    onSuccess(){
      setData && setData(defaultUser)
    }
  })

  return (
    <div className={classes.buttons}>
      {!!user && (
        <Tooltip content='Add VIdeo' placement='bottom-end'>
          <IconButton
            className={clsx(classes.btn)}
            variant='text'
            onClick={() => console.log('click')}
          >
            <AiFillPlusCircle fill='#CD3A42' className={classes.icon} />
          </IconButton>
        </Tooltip>
      )}
      
      <AuthForm />

      {!!user && (
        <Tooltip content='Logout' placement='bottom-end'>
          <IconButton
            className={clsx(classes.btn)}
            variant='text'
            onClick={()=>onLogout(user.email)}
          >
            <RiLogoutCircleRLine fill='#CD3A42' className={classes.icon} />
          </IconButton>
        </Tooltip>
      )}
    </div>
  )
}

export default HeaderButtons
