'use client'

import { MD_SCREEN_PX } from '@/utils/constants'
import { useMediaQuery } from '@/utils/media-query'
import NavigationRail from './NavigationRail'
import SideBarWithNav from './SideBarWithNav'
import React from 'react'

type MainLayoutProps = {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const isMediumScreen = useMediaQuery(MD_SCREEN_PX)

  return isMediumScreen ? (
    <>
      <NavigationRail />
      <main className='pl-20'>{children}</main>
    </>
  ) : (
    <>
      <SideBarWithNav title='Home' />
      <main>{children}</main>
    </>
  )
}
