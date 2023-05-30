import Image from 'next/image'
import logoSimple from '../../public/logo_simple.svg'
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
import * as Separator from '@radix-ui/react-separator'

export default function NavigationRail() {
  const year = new Date().getFullYear()

  return (
    <aside className='w-20 h-screen fixed top-0 left-0 px-3 py-4 flex flex-col items-center bg-background'>
      <Image
        src={logoSimple}
        alt={ALT_SWEETIES_LOGO}
        className='mb-12 w-8 h-8'
      />
      <ul aria-label={MAIN_MENU} className='flex-1 flex flex-col gap-y-3'>
        <NavigationRailItem iconName='home' label={HOME} active />
        <NavigationRailItem iconName='restaurant_menu' label={MENU} />
        <NavigationRailItem iconName='mark_email_unread' label={EMAILS} />
        <NavigationRailItem iconName='group' label={USERS} />
      </ul>
      <ul aria-label={OTHER_OPTIONS}>
        <NavigationRailItem iconName='logout' label={LOG_OUT} />
      </ul>
      <Separator.Root className='bg-outline h-[0.0625rem] mt-4 mb-6' />
      <footer className='grid place-items-center label-s'>&copy; {year}</footer>
    </aside>
  )
}

type NavigationRailItemProps = {
  iconName: string
  label: string
  active?: boolean
}

function NavigationRailItem({
  iconName,
  label,
  active = false,
}: NavigationRailItemProps) {
  return (
    <li className='w-full h-14'>
      <a
        href='#'
        className='group flex flex-col items-center gap-y-1 focus:outline-none'>
        <div
          className={`grid place-items-center rounded-2xl w-full h-8 ${
            active
              ? 'bg-secondary-container group-hover:bg-[#d0cff3] group-focus:bg-[#c7c6ec] group-active:bg-[#c7c6ec]'
              : 'bg-none group-hover:bg-[#1e1a1d14] group-focus:bg-[#1e1a1d1f] group-active:bg-[#1e1a1d1f]'
          }`}>
          <span
            className={`material-icons-round ${
              active ? 'text-on-secondary-container' : 'text-on-surface-variant'
            }`}>
            {iconName}
          </span>
        </div>

        <p
          className={`label-m text-center ${
            active ? 'text-on-background' : 'text-on-surface-variant'
          }`}>
          {label}
        </p>
      </a>
    </li>
  )
}
