'use client'

import * as RadixSwitch from '@radix-ui/react-switch'
import { ButtonHTMLAttributes } from 'react'

export default function Switch(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <RadixSwitch.Root
      {...props}
      className='w-[3.25rem] h-8 bg-surface-variant data-[state=checked]:bg-secondary rounded-full relative outline-none border-[0.125rem] border-outline border-solid data-[state=checked]:border-none cursor-pointer'
    >
      <RadixSwitch.Thumb className='block w-4 h-4 data-[state=checked]:w-6 data-[state=checked]:h-6 bg-outline data-[state=checked]:bg-on-secondary rounded-full transition-transform duration-100 translate-x-1 will-change-transform data-[state=checked]:translate-x-[1.5rem]' />
    </RadixSwitch.Root>
  )
}
