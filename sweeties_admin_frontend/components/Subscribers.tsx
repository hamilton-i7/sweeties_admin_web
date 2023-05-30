'use client'

import { MD_SCREEN_PX } from '@/utils/constants'
import { useMediaQuery } from '@/utils/media-query'
import SubscribersList from './SubscribersList'
import SubscribersFeed from './SubscribersFeed'

type SubscribersProps = {
  className?: string
}

export default function Subscribers({ className }: SubscribersProps) {
  const isMediumScreen = useMediaQuery(MD_SCREEN_PX)
  return isMediumScreen ? (
    <SubscribersFeed className={className} />
  ) : (
    <SubscribersList className={className} />
  )
}
