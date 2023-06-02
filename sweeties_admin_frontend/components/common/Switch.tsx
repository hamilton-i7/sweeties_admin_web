'use client'

import * as RadixSwitch from '@radix-ui/react-switch'
import React, { ButtonHTMLAttributes } from 'react'

type SwitchProps = React.ComponentProps<typeof RadixSwitch.Root> &
  ButtonHTMLAttributes<HTMLButtonElement>

export default function Switch(props: SwitchProps) {
  return (
    <RadixSwitch.Root
      {...props}
      className='group w-[3.25rem] h-8 bg-surface-variant data-[state=checked]:bg-secondary rounded-full relative outline-none border-[0.125rem] border-outline border-solid data-[state=checked]:border-none cursor-pointer'
    >
      <RadixSwitch.Thumb className='block w-4 h-4 active:w-7 active:h-7 data-[state=checked]:w-6 data-[state=checked]:h-6 bg-outline data-[state=checked]:bg-on-secondary rounded-full transition-transform duration-100 translate-x-1 will-change-transform data-[state=checked]:translate-x-[1.5rem] group-focus:before:w-7 group-focus:before:h-7 group-focus:before:bg-scrim before:rounded-full before:overflow-hidden before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2' />
    </RadixSwitch.Root>
  )
}
