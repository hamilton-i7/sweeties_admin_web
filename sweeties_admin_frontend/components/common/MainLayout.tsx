'use client'

import { MD_SCREEN_PX } from '@/utils/constants'
import { useMediaQuery } from '@/utils/media-query'
import NavigationRail from './NavigationRail'
import MainToolbar from './navbar/MainToolbar'
import * as Dialog from '@radix-ui/react-dialog'
import IconButton from './button/IconButton'
import Image from 'next/image'
import avatar from '@/public/avatar.svg'
import SideBar from './SideBar'

type MainLayoutProps = {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const isMediumScreen = useMediaQuery(MD_SCREEN_PX)

  return isMediumScreen ? (
    <>
      <TabletLayout />
      <main className='ml-20'>{children}</main>
    </>
  ) : (
    <>
      <MobileLayout title='Home' />
      <main>{children}</main>
    </>
  )
}

function TabletLayout() {
  return (
    <>
      <MainToolbar title='Home' className='md:pl-28' />
      <NavigationRail />
    </>
  )
}

type MobileLayoutProps = {
  title: string
}

function MobileLayout({ title }: MobileLayoutProps) {
  return (
    <nav className='flex items-center h-16 w-full pr-4 pl-1 fixed top-0 left-0'>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <IconButton className='mr-4'>
            <span className='material-icons-round'>menu</span>
          </IconButton>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='scrim' />
          <Dialog.Content asChild>
            <SideBar />
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
  )
}
