import TextButton from '@/components/common/button/TextButton'
import Subscribers from '@/components/Subscribers'

export default function Home() {
  return (
    <main className='flex flex-col text-on-background'>
      <TextButton
        label='Ver actividad reciente'
        className='self-end mr-4 mb-6'
      />
      <Subscribers />
    </main>
  )
}
