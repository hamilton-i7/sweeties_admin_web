import 'material-icons/iconfont/round.css'
import 'material-icons/iconfont/round.css'

type NavBarProps = {
  title: string
  className?: string
  children: React.ReactNode
}

export default function Toolbar({ title, className, children }: NavBarProps) {
  return (
    <header
      className={`w-full h-16 fixed top-0 left-0 flex items-center ${className}`}
    >
      <h1 className='title-l flex-1 mr-3'>{title}</h1>
      <div className='flex gap-x-3 items-center'>{children}</div>
    </header>
  )
}
