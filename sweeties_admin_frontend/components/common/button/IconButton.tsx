'use client'

import React, { forwardRef } from 'react'

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, onClick, children }, ref) => (
    <button
      type='button'
      ref={ref}
      className={`group grid place-items-center h-12 w-12 text-2xl ${className} focus:outline-none`}
      onClick={onClick}
    >
      <span className='grid place-items-center h-10 w-10 rounded-full group-hover:bg-[#4e444b13] group-focus:bg-[#4e444b1f] group-active:bg-[#4e444b1f]'>
        {children}
      </span>
    </button>
  )
)

IconButton.displayName = 'IconButton'

export default IconButton
