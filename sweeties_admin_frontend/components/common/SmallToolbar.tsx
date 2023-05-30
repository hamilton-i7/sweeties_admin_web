import Toolbar from './navbar/Toolbar'
import 'material-icons/iconfont/round.css'

type SmallToolbarProps = {
  title: string
  actions?: React.ReactNode
}

export default function SmallToolbar({ title, actions }: SmallToolbarProps) {
  return (
    <Toolbar
      title={<h2 className='title-l flex-1 mr-3'>{title}</h2>}
      actions={actions}
      className={`${actions ? 'pl-4 pr-1 md:pl-6 md:pl-2' : 'px-4 md:px-6'}`}
    />
  )
}
