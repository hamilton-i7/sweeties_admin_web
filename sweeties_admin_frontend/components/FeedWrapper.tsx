'use client'

import { XXL_SCREEN_PX } from '@/utils/constants'
import { useMediaQuery } from '@/utils/media-query'
import React from 'react'
import TextButton from './common/button/TextButton'
import Feed from './Feed'

export default function FeedWrapper() {
  const isDesktopScreen = useMediaQuery(XXL_SCREEN_PX)
  const viewActivityButton = (
    <TextButton
      label='Ver actividad reciente'
      className='self-end mr-4 mb-6 md:mt-8 md:mb-4'
    />
  )

  return <Feed anchorEl={isDesktopScreen ? undefined : viewActivityButton} />
}
