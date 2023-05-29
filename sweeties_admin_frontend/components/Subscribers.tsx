'use client'

import { MD_SCREEN_PX } from '@/utils/constants'
import { useMediaQuery } from '@/utils/media-query'
import SubscribersList from './SubscribersList'
import SubscribersFeed from './SubscribersFeed'

export default function Subscribers() {
  const isMediumScreen = useMediaQuery(MD_SCREEN_PX)
  return isMediumScreen ? <SubscribersFeed /> : <SubscribersList />
}
