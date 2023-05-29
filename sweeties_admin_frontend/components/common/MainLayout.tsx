'use client'

import { MD_SCREEN_PX } from '@/utils/constants'
import { useMediaQuery } from '@/utils/media-query'
import NavigationRail from './NavigationRail'
import SideBarWithNav from './SideBarWithNav'
import React from 'react'
import MainToolbar from './navbar/MainToolbar'

type MainLayoutProps = {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const isMediumScreen = useMediaQuery(MD_SCREEN_PX)

  return isMediumScreen ? (
    <>
      <MainToolbar title='Home' className='md:pl-28' />
      <NavigationRail />
      <main className='ml-20'>{children}</main>
    </>
  ) : (
    <>
      <SideBarWithNav title='Home' />
      <main>{children}</main>
    </>
  )
}
