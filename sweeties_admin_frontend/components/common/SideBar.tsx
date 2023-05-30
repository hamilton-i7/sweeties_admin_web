import Image from 'next/image'
import logoSimple from '@/public/logo_simple.svg'
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
} from '../../utils/constants'
import * as Separator from '@radix-ui/react-separator'
import * as Dialog from '@radix-ui/react-dialog'
import { forwardRef } from 'react'

type SideBarProps = React.ComponentProps<typeof Dialog.Content> & {
  currentPath: string
}

const SideBar = forwardRef<HTMLSpanElement, SideBarProps>(
  ({ currentPath, ...props }, ref) => {
    const year = new Date().getFullYear()

    const isCurrentPath = (path: string) => path === currentPath

    return (
      <aside
        {...props}
        ref={ref}
        className='w-80 h-screen overflow-y-auto fixed top-0 left-0 rounded-r-[2rem] bg-background py-6 px-4 flex flex-col outline-none data-[state=open]:animate-slide-in-right'
      >
        <header className='flex items-center gap-x-3 mb-6 px-3'>
          <Image src={logoSimple} alt={ALT_SWEETIES_LOGO} className='w-8 h-8' />
          <h3
            id='main-navigation-label'
            className='body-l text-on-surface-variant'
          >
            Sweeties672
          </h3>
        </header>
        <ul className='flex-1' aria-label={MAIN_MENU}>
          <SideBarItem
            iconName='home'
            label={HOME}
            active={isCurrentPath('/')}
          />
          <SideBarItem
            iconName='restaurant_menu'
            label={MENU}
            active={isCurrentPath('/menu')}
          />
          <SideBarItem
            iconName='mark_email_unread'
            label={EMAILS}
            active={isCurrentPath('/emails')}
          />
          <SideBarItem
            iconName='group'
            label={USERS}
            active={isCurrentPath('/users')}
          />
        </ul>
        <ul aria-label={OTHER_OPTIONS}>
          <SideBarItem iconName='logout' label={LOG_OUT} />
        </ul>
        <Separator.Root className='bg-outline h-[0.0625rem] mt-4 mb-6' />
        <footer className='grid place-items-center label-s'>
          {BUSINESS_NAME} &copy; {year}
        </footer>
      </aside>
    )
  }
)

SideBar.displayName = 'SideBar'

export default SideBar

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
