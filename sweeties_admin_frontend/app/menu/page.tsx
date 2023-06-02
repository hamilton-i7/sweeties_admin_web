import TextButton from '@/components/common/button/TextButton'
import { Metadata } from 'next'
import 'material-icons/iconfont/round.css'
import Catalog from '@/components/Catalog'
import { ICategory } from '@/features/categories/category.model'
import { IProduct } from '@/features/products/product.model'

export const metadata: Metadata = {
  title: 'Menú',
}

export default async function MenuPage() {
  const categoriesData = getCategories()
  const productsData = getProducts()

  const [categories, products] = await Promise.all([
    categoriesData,
    productsData,
  ])
  const menuMap: Map<ICategory, IProduct[]> = new Map()

  products.forEach(product => {
    const category = categories.find(
      category => category.id === product.category
    )!
    menuMap.set(category, [...(menuMap.get(category) ?? []), product])
  })

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
      <Catalog products={menuMap} />
    </div>
  )
}

async function getCategories(): Promise<ICategory[]> {
  const res = await fetch(`${process.env.BASE_URL}/categories`)
  return res.json()
}

async function getProducts(): Promise<IProduct[]> {
  const res = await fetch(`${process.env.BASE_URL}/products`)
  return res.json()
}
