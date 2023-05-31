import Image from 'next/image'
import Switch from './common/Switch'
import IconButton from './common/button/IconButton'
import 'material-icons/iconfont/round.css'
import { imageLoader } from '@/utils/image'

type ProductProps = {
  name: string
  imgUrl?: string
}

export default function Product({ name, imgUrl }: ProductProps) {
  return (
    <div className='w-full h-16 flex items-center gap-1 pl-12 pr-4 bg-[#f9f2f9]'>
      <IconButton>
        <span className='material-icons-round'>drag_indicator</span>
      </IconButton>
      {imgUrl ? (
        <Image
          loader={imageLoader}
          src={imgUrl}
          alt={name}
          width={40}
          height={40}
        />
      ) : (
        <div className='w-10 h-10 bg-outline rounded-xl'></div>
      )}

      <span className='body-l flex-1'>{name}</span>
      <Switch />
    </div>
  )
}
