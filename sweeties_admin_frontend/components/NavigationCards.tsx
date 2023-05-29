import Image from 'next/image'
import email from '../public/email.svg'
import team from '../public/team.svg'
import menu from '../public/menu.svg'

type NavigatonCardsProps = {
  className?: string
}

export default function NavigationCards({
  className = '',
}: NavigatonCardsProps) {
  return (
    <section
      className={`flex flex-col md:flex-row items-center gap-4 ${className}`}
    >
      <NavigationCard label='Menú' imgSrc={menu} alt='Menú de restaurante' />
      <NavigationCard label='Correos' imgSrc={email} alt='Carta abierta' />
      <NavigationCard label='Usuarios' imgSrc={team} alt='Equipo de personas' />
    </section>
  )
}

type NavigationCardProps = {
  label: string
  imgSrc: string
  alt: string
}

function NavigationCard({ label, imgSrc, alt }: NavigationCardProps) {
  return (
    <article className='flex flex-col items-center gap-y-4 h-[12.5rem] w-[12.5rem] rounded-lg overflow-hidden bg-surface-variant'>
      <div className='grid place-items-center w-full h-[8.25rem] rounded-b-lg bg-primary'>
        <Image
          src={imgSrc}
          alt={alt}
          className='h-[6.25rem] w-[6.25rem]'
          priority
        />
      </div>
      <p className='body-l'>{label}</p>
    </article>
  )
}
