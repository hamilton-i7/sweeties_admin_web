'use client'

import React, { forwardRef } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

type TextButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.ComponentProps<typeof Dialog.Trigger> & {
    label: string
    className?: string
    iconStart?: React.ReactNode
  }

const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ label, iconStart, className = '', ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      className={`label-l text-primary text-center h-10 min-w-[3rem] flex items-center ${
        iconStart ? 'pl-3 pr-4 gap-2' : 'px-3'
      } rounded-3xl outline-none hover:bg-[#8d418a14] focus:bg-[#8d418a1f] active:bg-[#8d418a1f] ${className}`}
      type='button'
    >
      {iconStart}
      {label}
    </button>
  )
)

TextButton.displayName = 'TextButton'

export default TextButton
