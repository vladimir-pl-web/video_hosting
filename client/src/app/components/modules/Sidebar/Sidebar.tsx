'use client'
import { FC } from 'react'
import classes from './Sidebar.module.scss'
import Image from 'next/image'
import image from '../../../assets/images/panda.svg'
import Links from './Links/Links'
import { media, info, settings } from './Links/constants'
import { IconButton, Drawer } from '@material-tailwind/react'
import { RiCloseLargeFill } from 'react-icons/ri'
import { RiMenuFold4Line } from 'react-icons/ri'
import clsx from 'clsx'
import { useUser } from '../../../hooks/useUser'

const Sidebar: FC = () => {
  const { openSidebar, setOpenSidebar, user } = useUser()

  const onOpen = () => {
    setOpenSidebar(true)
  }

  const onClose = () => {
    setOpenSidebar(false)
  }

  if (!user) return null

  return (
    <>
      <Drawer
        open={openSidebar}
        onClose={onClose}
        className={clsx(classes.sidebar)}
      >
        <div className={classes.profile}>
          <Image alt='avatar' src={image} height={52} width={52} />
          <span className={classes.name}>Nannie Nelson</span>
          <span className={classes.place}>Montreal, QC</span>
          <div className={classes.info}>
            <div className={classes.amount}>
              <span>278</span>
              <span>VIDEOS</span>
            </div>
            <div className={classes.amount}>
              <span>36.5K</span>
              <span>SUBSCRIBERS</span>
            </div>
          </div>
        </div>
        <Links links={media} />
        <Links links={info} />
        <Links links={settings} />
        <IconButton
          variant='text'
          onClick={onClose}
          className={clsx(classes.btn, '!absolute hover:!bg-blue-gray-100')}
        >
          <RiCloseLargeFill className='w-4 h-4' />
        </IconButton>
      </Drawer>
      {!openSidebar && (
        <IconButton
          variant='text'
          onClick={onOpen}
          className={clsx(
            classes.btn,
            '!absolute hover:!bg-blue-gray-100 left-4 top-4'
          )}
        >
          <RiMenuFold4Line className='w-6 h-6' />
        </IconButton>
      )}
    </>
  )
}
export default Sidebar
