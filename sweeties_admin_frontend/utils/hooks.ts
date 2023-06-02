import { useCallback, useEffect, useState } from 'react'

export const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    setTargetReached(e.matches)
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`)
    media.addEventListener('change', updateTarget)

    if (media.matches) {
      setTargetReached(true)
    }
    return () => media.removeEventListener('change', updateTarget)
  }, [updateTarget, width])
  return targetReached
}

export const useScrollPastLimit = (limit: number) => {
  const [scrolledPastLimit, setScrolledPastLimit] = useState(false)

  const updatedLimitScrolled = useCallback(() => {
    setScrolledPastLimit(window.scrollY >= limit)
  }, [limit])

  useEffect(() => {
    window.addEventListener('scroll', updatedLimitScrolled, { passive: true })
    return () => {
      window.removeEventListener('scroll', updatedLimitScrolled)
    }
  }, [updatedLimitScrolled])
  return scrolledPastLimit
}
