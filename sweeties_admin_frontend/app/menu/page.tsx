import TextButton from '@/components/common/button/TextButton'
import { Metadata } from 'next'
import 'material-icons/iconfont/round.css'
import Catalog from '@/components/Catalog'
import { products } from '@/utils/data'

export const metadata: Metadata = {
  title: 'Menú',
}

export default function MenuPage() {
  return (
    <div className='pt-[5rem] flex flex-col'>
      <div className='flex flex-col gap-2 self-end mr-4 mb-4'>
        <TextButton
          label='Agregar categoría'
          iconStart={<span className='material-icons-round'>add</span>}
        />
        <TextButton
          label='Agregar producto'
          iconStart={<span className='material-icons-round'>add</span>}
        />
      </div>
      <Catalog products={products} />
    </div>
  )
}
