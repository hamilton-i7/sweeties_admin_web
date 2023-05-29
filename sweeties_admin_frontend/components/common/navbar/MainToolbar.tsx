import Image from 'next/image'
import Toolbar from './Toolbar'
import avatar from '@/public/avatar.svg'
import { USER_IMAGE } from '@/utils/constants'

type MainNavProps = {
  title: string
  className?: string
}

export default function MainToolbar({ title, className }: MainNavProps) {
  return (
    <Toolbar title={title} className={`px-4 md:px-8 md:h-20 ${className}`}>
      <Image src={avatar} alt={USER_IMAGE} className='w-8 h-8' />
    </Toolbar>
  )
}
