import 'material-icons/iconfont/round.css'
import IconButton from './button/IconButton'
import Image from 'next/image'
import avatar from '../../public/avatar.svg'
import 'material-icons/iconfont/round.css'

type NavBarProps = {
  title: string
  onMenuClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function NavBar({ title, onMenuClick }: NavBarProps) {
  return (
    <nav className='flex items-center h-16 w-full pr-4 pl-1 fixed top-0 left-0'>
      <IconButton className='mr-4' onClick={onMenuClick}>
        <span className='material-icons-round'>menu</span>
      </IconButton>
      <h1 className='title-l flex-1 mr-3'>{title}</h1>
      <Image
        src={avatar}
        alt='Avatar de usuario'
        className='w-[2rem] h-[2rem]'
      />
    </nav>
  )
}
