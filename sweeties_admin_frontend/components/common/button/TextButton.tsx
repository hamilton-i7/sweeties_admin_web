'use client'

import React, { forwardRef } from 'react'

type TextButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  className?: string
}

const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ label, className = '' }, ref) => (
    <button
      className={`label-l text-primary text-center h-10 min-w-[3rem] px-3 rounded-3xl outline-none hover:bg-[#8d418a14] focus:bg-[#8d418a1f] active:bg-[#8d418a1f] ${className}`}
      type='button'
    >
      {label}
    </button>
  )
)

TextButton.displayName = 'TextButton'

export default TextButton
