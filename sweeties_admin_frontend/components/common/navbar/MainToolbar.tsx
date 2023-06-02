'use client'

import Image from 'next/image'
import Toolbar from './Toolbar'
import avatar from '@/public/avatar.svg'
import { TRANSPARENT_TOOLBAR_LIMIT, USER_IMAGE } from '@/utils/constants'
import { useScrollPastLimit } from '../../../utils/hooks'

type MainNavProps = {
  title: string
  className?: string
}

export default function MainToolbar({ title, className }: MainNavProps) {
  const scrolledPastLimit = useScrollPastLimit(TRANSPARENT_TOOLBAR_LIMIT)

  return (
    <Toolbar
      fixed
      title={<h1 className='title-l flex-1 mr-3'>{title}</h1>}
      actions={<Image src={avatar} alt={USER_IMAGE} className='w-8 h-8' />}
      className={`px-4 md:px-8 md:h-20 ${
        scrolledPastLimit ? 'bg-[#f9f2f9]' : 'bg-background'
      } transition-colors ${className}`}
    />
  )
}
