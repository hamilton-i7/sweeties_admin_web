import TextButton from '@/components/common/button/TextButton'
import Feed from '@/components/Feed'
import NavigationCards from '@/components/NavigationCards'
import Subscribers from '@/components/Subscribers'

export default function Home() {
  const viewActivityButton = (
    <TextButton
      label='Ver actividad reciente'
      className='self-end mr-4 mb-6 md:mt-8 md:mb-4'
    />
  )

  return (
    <div className='flex flex-col pb-12 pt-[5rem] md:px-8 text-on-background'>
      <Feed anchorEl={viewActivityButton} />
      <Subscribers />
      <NavigationCards className='mt-8 md:mt-12' />
    </div>
  )
}
