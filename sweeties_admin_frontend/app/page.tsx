import TextButton from '@/components/common/button/TextButton'
import Subscribers from '@/components/Subscribers'
import NavigationCards from '@/components/NavigationCards'

export default function Home() {
  return (
    <main className='flex flex-col pb-12 text-on-background'>
      <TextButton
        label='Ver actividad reciente'
        className='self-end mr-4 mb-6'
      />
      <Subscribers />
      <NavigationCards className='mt-8' />
    </main>
  )
}
