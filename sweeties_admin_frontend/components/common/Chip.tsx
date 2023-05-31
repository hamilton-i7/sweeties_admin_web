import React from 'react'

type ChipProps = {
  label: string
  className?: string
}

export default function Chip({ label, className }: ChipProps) {
  return (
    <div
      className={`grid place-items-center h-8 px-4 rounded-lg label-m ${className}`}
    >
      {label}
    </div>
  )
}
