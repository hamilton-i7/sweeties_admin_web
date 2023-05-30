import 'material-icons/iconfont/round.css'
import 'material-icons/iconfont/round.css'
import React from 'react'

type NavBarProps = {
  title: React.ReactNode
  actions?: React.ReactNode
  className?: string
  fixed?: boolean
}

export default function Toolbar({
  title,
  actions,
  className,
  fixed = false,
}: NavBarProps) {
  return (
    <header
      className={`w-full h-16 ${
        fixed ? 'fixed top-0 right-0' : ''
      } flex items-center ${className}`}
    >
      {title}
      {actions && <div className='flex gap-x-3 items-center'>{actions}</div>}
    </header>
  )
}
