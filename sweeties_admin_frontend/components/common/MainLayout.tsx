'use client'

import { MD_SCREEN_PX, XL_SCREEN_PX } from '@/utils/constants'
import { useMediaQuery } from '@/utils/hooks'
import NavigationRail from './NavigationRail'
import MainToolbar from './navbar/MainToolbar'
import * as Dialog from '@radix-ui/react-dialog'
import IconButton from './button/IconButton'
import Image from 'next/image'
import avatar from '@/public/avatar.svg'
import SideBar from './SideBar'
import { usePathname } from 'next/navigation'

type MainLayoutProps = {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const isXlScreen = useMediaQuery(XL_SCREEN_PX)
  const isMdScreen = useMediaQuery(MD_SCREEN_PX)
  const pathname = usePathname()

  return isXlScreen ? (
    <>
      <DesktopLayout pathname={pathname} />
      <main className='ml-[20rem]'>{children}</main>
    </>
  ) : isMdScreen ? (
    <>
      <TabletLayout pathname={pathname} />
      <main className='ml-20'>{children}</main>
    </>
  ) : (
    <>
      <MobileLayout title='Home' pathname={pathname} />
      <main>{children}</main>
    </>
  )
}

type LayoutProps = {
  pathname: string
}

function DesktopLayout({ pathname }: LayoutProps) {
  return (
    <>
      <MainToolbar title='Home' className='xl:w-[calc(100%-20rem)]' />
      <SideBar currentPath={pathname} />
    </>
  )
}

function TabletLayout({ pathname }: LayoutProps) {
  return (
    <>
      <MainToolbar title='Home' className='md:w-[calc(100%-5rem)]' />
      <NavigationRail currentPath={pathname} />
    </>
  )
}

type MobileLayoutProps = LayoutProps & {
  title: string
}

function MobileLayout({ title, pathname }: MobileLayoutProps) {
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
            <SideBar currentPath={pathname} />
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
