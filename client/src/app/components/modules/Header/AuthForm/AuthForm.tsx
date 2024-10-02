import {
  Button,
  IconButton,
  Input,
  Popover,
  PopoverContent,
  PopoverHandler,
  Tooltip,
  Typography
} from '@material-tailwind/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FC, SetStateAction, useState } from 'react'
import classes from './Form.module.scss'
import { FaUserCircle } from 'react-icons/fa'
import { IAuth } from '../../../../types'
import { validEmail } from '../../../../constant'
import { useOutside } from '../../../../hooks/useOutside'
import { useMutation } from 'react-query'
import { Auth } from '../../../../services/auth/auth.service'
import { useUser } from '../../../../hooks/useUser'

const AuthForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<IAuth>({
    mode: 'onSubmit'
  })
  const{setData} = useUser()
  const {ref, isShow, setIsShow} = useOutside(false)
  const [auth, setAuth] = useState<'register' | 'login'>('login')

  const onOpen = () => {
    setIsShow(!isShow)
  }

  const setAuthType = (type: SetStateAction<'register' | 'login'>) => {
    setAuth(type)
  }

  const {mutate: onLogin} = useMutation('login',(data:IAuth)=> Auth.login(data.email, data.password),{
    onSuccess(data){
    setData && setData(data.data)
    }
  })

  const {mutate:onRegister} = useMutation('register',(data:IAuth)=> Auth.register(data.email, data.password),{
    onSuccess(data){
    setData && setData(data.data)
    }
  })

  const onSubmit: SubmitHandler<IAuth> = (data) => {
    if(auth === "login"){
      onLogin(data)
    }
    if(auth === "register"){
      onRegister(data)
    }
  }

  return (
    <Popover 
    placement='bottom-end'
    open={isShow}
    offset={0}
      >
      
      <PopoverHandler>
        <Tooltip content='Login/Register' placement='bottom-end'>
          <IconButton variant='text' onClick={onOpen}>
            <FaUserCircle fill='#A4A4A4' className='h-8 w-8' />
          </IconButton>
        </Tooltip>
      </PopoverHandler>
      <PopoverContent>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form} ref={ref}>
          <div className={classes.fields}>
            <Typography variant='h6' color='blue-gray' className='-mb-3'>
              Email
            </Typography>
            <Input
              size='md'
              variant='standard'
              label={errors.email?.message}
              placeholder='name@mail.com'
              className={classes.field}
              labelProps={{
                className: 'text-red'
              }}
              crossOrigin={undefined}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: validEmail,
                  message: 'Please enter valid email'
                }
              })}
            />
            <Typography variant='h6' color='blue-gray' className='-mb-3'>
              Password
            </Typography>
            <Input
              type='password'
              size='md'
              variant='standard'
              placeholder='********'
              label={errors.password?.message}
              labelProps={{
                className: 'text-red'
              }}
              className={classes.field}
              crossOrigin={undefined}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Should be at least 6 symbols'
                }
              })}
            />
          </div>
          <div className={classes.btns}>
          <Button
              type='submit'
              onClick={() => setAuthType('login')}
              color="orange"
              variant='outlined'
              size="sm"
            >
              Login
            </Button>
            <Button
              type='submit'
              onClick={() => setAuthType('register')}
              color="deep-orange"
              variant="gradient"
              size="sm"
            >
              Register
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}

export default AuthForm
