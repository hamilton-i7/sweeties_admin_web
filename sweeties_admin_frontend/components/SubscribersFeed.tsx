import SubscriberChip from './SubscriberChip'
import * as Separator from '@radix-ui/react-separator'
import TextButton from './common/button/TextButton'
import 'material-icons/iconfont/round.css'
import Menu from './common/Menu'
import MenuItem from './common/MenuItem'
import { forwardRef } from 'react'

type SubscribersFeedProps = {
  className?: string
}

export default function SubscribersFeed({ className }: SubscribersFeedProps) {
  const sortButton = (
    <button className='flex items-center focus:outline-none text-on-tertiary-container font-medium text-[0.875rem ]'>
      <span>Primeros suscriptores</span>
      <span className='material-icons-round'>expand_more</span>
    </button>
  )

  return (
    <section
      className={`w-full py-3 px-4 flex flex-col bg-tertiary-container rounded-lg ${className}`}
    >
      <header className='flex justify-between items-baseline text-on-tertiary-container mb-4'>
        <h2 className='headline-l'>Suscriptores</h2>
        <div className='flex items-baseline gap-3 body-m'>
          <span className='text-on-surface-variant'>Ordenar por:</span>
          <Menu anchorEl={sortButton}>
            <MenuItem text='Primeros suscriptores' />
            <MenuItem text='Últimos suscriptores' />
          </Menu>
        </div>
      </header>
      <div className='flex items-baseline gap-3 uppercase body-l text-on-tertiary-container mb-2'>
        <span className='flex-1'>Correo</span>
        <span className='w-20 text-center'>Estado</span>
        <span className='flex-1'>Fecha de suscripción</span>
      </div>
      <ul>
        <SubscriberFeedItem
          email='name@example.com'
          active
          dateSubscribed='03 febrero, 2023. 13:04'
        />
        <Separator.Root className='bg-outline h-[0.0625rem] my-2' />
        <SubscriberFeedItem
          email='name@example.com'
          active
          dateSubscribed='03 febrero, 2023. 13:04'
        />
        <Separator.Root className='bg-outline h-[0.0625rem] my-2' />
        <SubscriberFeedItem
          email='name@example.com'
          active
          dateSubscribed='03 febrero, 2023. 13:04'
        />
      </ul>
      <TextButton label='Ver todos' className='self-start mt-2' />
    </section>
  )
}

type SubscriberFeedItemProps = {
  email: string
  active: boolean
  dateSubscribed: string
}

function SubscriberFeedItem({
  email,
  active,
  dateSubscribed,
}: SubscriberFeedItemProps) {
  return (
    <li className='flex items-center gap-3 body-l text-on-surface-variant'>
      <p className='flex-1'>{email}</p>
      <div className='w-20'>
        <SubscriberChip active={active} />
      </div>
      <p className='flex-1'>{dateSubscribed}</p>
    </li>
  )
}

type SortButtonProps = {
  label: string
}

const SortButton = forwardRef<HTMLButtonElement, SortButtonProps>(
  ({ label }, ref) => (
    <button
      ref={ref}
      className='flex items-center gap-1 text-on-tertiary-container focus:outline-none'
    >
      <span>{label}</span>
      <span className='material-icons-round'>expand_more</span>
    </button>
  )
)

SortButton.displayName = 'SortButton'
