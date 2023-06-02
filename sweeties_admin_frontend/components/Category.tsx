import Switch from './common/Switch'
import IconButton from './common/button/IconButton'
import 'material-icons/iconfont/round.css'

type CategoryProps = {
  name: string
  active?: boolean
}

export default function Category({ name, active = false }: CategoryProps) {
  return (
    <div className='w-full h-16 flex gap-1 items-center px-4 bg-[#F2E7F2]'>
      <IconButton>
        <span className='material-icons-round'>drag_indicator</span>
      </IconButton>
      <span className='title-l flex-1'>{name}</span>
      <Switch aria-label={active ? 'Desactivar' : 'Activar'} />
    </div>
  )
}
