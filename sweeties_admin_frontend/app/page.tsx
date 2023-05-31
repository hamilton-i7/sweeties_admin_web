import FeedWrapper from '@/components/FeedWrapper'
import NavigationCards from '@/components/NavigationCards'
import Subscribers from '@/components/Subscribers'

export default function Home() {
  return (
    <div className='flex flex-col 2xl:flex-row-reverse 2xl:gap-x-4 items-start pb-12 pt-[5rem] 2xl:pt-[7rem] md:px-8 text-on-background'>
      <FeedWrapper />
      <div className='2xl:flex-1 w-full'>
        <Subscribers />
        <NavigationCards className='mt-8 md:mt-12' />
      </div>
    </div>
  )
}
