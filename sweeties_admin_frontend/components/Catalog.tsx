import { ICategory } from '@/features/categories/category.model'
import { IProduct } from '@/features/products/product.model'
import Category from './Category'
import Product from './Product'

type CatalogProps = {
  products: Map<ICategory, IProduct[]>
}

export default function Catalog({ products }: CatalogProps) {
  return (
    <ul className='w-full'>
      {Array.from(products.keys()).map(category => (
        <li key={category.id}>
          <Category name={category.name} />
          <ul>
            {products.get(category)?.map(product => (
              <li key={product.id}>
                <Product name={product.name} />
              </li>
            )) ?? []}
          </ul>
        </li>
      ))}
    </ul>
  )
}
