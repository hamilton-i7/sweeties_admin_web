import 'material-icons/iconfont/round.css'
import IconButton from './button/IconButton'
import Image from 'next/image'
import avatar from '../../public/avatar.svg'

type NavBarProps = {
  title: string
}

export default function NavBar({ title }: NavBarProps) {
  return (
    <nav className='flex items-center h-16 w-full px-4'>
      <IconButton className='mr-4'>H</IconButton>
      <h1 className='title-l flex-1 mr-3'>{title}</h1>
      <Image
        src={avatar}
        alt='Avatar de usuario'
        className='w-[2rem] h-[2rem]'
      />
    </nav>
  )
}
