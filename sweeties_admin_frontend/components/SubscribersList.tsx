import SubscriberChip from './SubscriberChip'
import TextButton from './common/button/TextButton'

type SubscribersListProps = {
  className?: string
}

export default function SubscribersList({ className }: SubscribersListProps) {
  return (
    <section className={`flex flex-col ${className}`}>
      <h2 className='headline-l mb-4 ml-4'>Suscriptores</h2>
      <ul className='list-none w-full bg-tertiary-container mb-0.5'>
        <SubscriberItem email='name@example.com' active />
        <SubscriberItem email='name@example.com' active />
        <SubscriberItem email='name@example.com' active />
      </ul>
      <TextButton label='Ver todos' className='self-start ml-1 mt-2' />
    </section>
  )
}

type SubscriberItemprops = {
  email: string
  active: boolean
}

function SubscriberItem({ email, active }: SubscriberItemprops) {
  return (
    <li className='flex items-center justify-between gap-x-4 h-12 w-full px-4'>
      <p className='body-l text-on-surface-variant'>{email}</p>
      {active && <SubscriberChip />}
    </li>
  )
}
