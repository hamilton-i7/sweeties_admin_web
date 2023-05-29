import React from 'react'
import Chip from './common/Chip'

type SubscriberChipProps = {
  active?: boolean
}

export default function SubscriberChip({ active = true }: SubscriberChipProps) {
  return (
    <Chip
      label={active ? 'Activo' : 'Inactivo'}
      className={
        active
          ? 'bg-[#A5F6A2] text-[#002105]'
          : 'bg-outline-variant text-on-surface-variant'
      }
    />
  )
}
