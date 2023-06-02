import Image from 'next/image'
import Switch from './common/Switch'
import IconButton from './common/button/IconButton'
import 'material-icons/iconfont/round.css'

type ProductProps = {
  name: string
  imgUrl?: string
  active?: boolean
}

export default function Product({
  name,
  imgUrl,
  active = false,
}: ProductProps) {
  return (
    <div className='w-full h-16 flex items-center gap-1 pl-12 pr-4 bg-[#f9f2f9]'>
      <IconButton>
        <span className='material-icons-round'>drag_indicator</span>
      </IconButton>
      {imgUrl ? (
        <div className='w-10 h-10 bg-background rounded-xl grid place-items-center overflow-hidden'>
          <Image
            src={imgUrl}
            alt={name}
            width={40}
            height={40}
            className='w-10 h-10'
          />
        </div>
      ) : (
        <div className='w-10 h-10 bg-outline rounded-xl'></div>
      )}

      <span className='body-l flex-1'>{name}</span>
      <Switch checked={active} aria-label={active ? 'Desactivar' : 'Activar'} />
    </div>
  )
}
