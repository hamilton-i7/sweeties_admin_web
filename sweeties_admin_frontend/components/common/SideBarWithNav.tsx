'use client'

import 'material-icons/iconfont/round.css'
import Image from 'next/image'
import logoSimple from '../../public/logo_simple.svg'
import IconButton from './button/IconButton'
import avatar from '../../public/avatar.svg'
import * as Dialog from '@radix-ui/react-dialog'
import * as Separator from '@radix-ui/react-separator'
import {
  ALT_SWEETIES_LOGO,
  BUSINESS_NAME,
  EMAILS,
  HOME,
  LOG_OUT,
  MAIN_MENU,
  MENU,
  OTHER_OPTIONS,
  USERS,
} from '@/utils/constants'

type SideBarWithNavProps = {
  title: string
}

export default function SideBarWithNav({ title }: SideBarWithNavProps) {
  const year = new Date().getFullYear()

  return (
    <>
      <nav className='flex items-center h-16 w-full pr-4 pl-1 fixed top-0 left-0'>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <IconButton className='mr-4'>
              <span className='material-icons-round'>menu</span>
            </IconButton>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className='bg-scrim fixed top-0 left-0 w-full h-screen' />
            <Dialog.Content
              asChild
              className='data-[state=open]:animate-slide-in'
            >
              <aside className='w-80 h-screen overflow-y-auto fixed top-0 left-0 rounded-r-[2rem] bg-background py-6 px-4 flex flex-col outline-none'>
                <header className='flex items-center gap-x-3 mb-6 px-3'>
                  <Image
                    src={logoSimple}
                    alt={ALT_SWEETIES_LOGO}
                    className='w-8 h-8'
                  />
                  <h3
                    id='main-navigation-label'
                    className='body-l text-on-surface-variant'
                  >
                    Sweeties672
                  </h3>
                </header>
                <menu className='flex-1' aria-label={MAIN_MENU}>
                  <SideBarItem iconName='home' label={HOME} active />
                  <SideBarItem iconName='restaurant_menu' label={MENU} />
                  <SideBarItem iconName='mark_email_unread' label={EMAILS} />
                  <SideBarItem iconName='group' label={USERS} />
                </menu>
                <menu aria-label={OTHER_OPTIONS}>
                  <SideBarItem iconName='logout' label={LOG_OUT} />
                </menu>
                <Separator.Root className='bg-outline h-[0.0625rem] mt-4 mb-6' />
                <footer className='grid place-items-center label-s'>
                  {BUSINESS_NAME} &copy; {year}
                </footer>
              </aside>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <h1 className='title-l flex-1 mr-3'>{title}</h1>
        <Image
          src={avatar}
          alt='Avatar de usuario'
          className='w-[2rem] h-[2rem]'
        />
      </nav>
    </>
  )
}

type SideBarItemProps = {
  iconName: string
  label: string
  active?: boolean
}

function SideBarItem({ iconName, label, active = false }: SideBarItemProps) {
  const itemColors = active
    ? 'text-on-secondary-container bg-secondary-container hover:bg-[#d0cff3] focus:bg-[#c7c6ec] active:bg-[#c7c6ec]'
    : 'text-on-surface-variant hover:bg-[#1e1a1d14] focus:bg-[#1e1a1d1f] active:bg-[#1e1a1d1f]'
  return (
    <li className='w-full h-14'>
      <a
        href='#'
        className={`h-full rounded-[6.25rem] pl-4 pr-6 flex items-center gap-x-3 ${itemColors} focus:outline-none`}
      >
        <span className='material-icons-round'>{iconName}</span>
        <p className='label-l'>{label}</p>
      </a>
    </li>
  )
}
