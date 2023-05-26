'use client'

import React from 'react'

type IconButtonProps = {
  children: React.ReactNode
  className?: string
}

export default function IconButton({ className, children }: IconButtonProps) {
  return (
    <button
      className={`grid place-items-center h-12 w-12 text-2xl ${className}`}
    >
      <span className='grid place-items-center h-10 w-10 rounded-full hover:bg-[#4e444b13] focus:bg-[#4e444b1f] active:bg-[#4e444b1f]'>
        {children}
      </span>
    </button>
  )
}
