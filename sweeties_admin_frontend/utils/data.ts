import { ICategory } from '@/features/categories/category.model'
import { IProduct } from '@/features/products/product.model'

export const products = new Map<ICategory, IProduct[]>([
  [
    {
      id: '1',
      name: 'Batidos',
      active: true,
      createdAt: new Date(),
      lastModified: new Date(),
    },
    [
      {
        id: '1',
        name: 'Batido de Fresa',
        description: 'Vaso 16 oz.',
        price: 4.5,
        recommended: true,
        active: true,
        categoryId: '1',
        createdAt: new Date(),
        lastModified: new Date(),
      },
      {
        id: '1',
        name: 'Batido de Oreo',
        description: 'Vaso 16 oz.',
        price: 4.0,
        recommended: false,
        active: true,
        categoryId: '1',
        createdAt: new Date(),
        lastModified: new Date(),
      },
    ],
  ],
  [
    {
      id: '2',
      name: 'Smoothies',
      active: true,
      createdAt: new Date(),
      lastModified: new Date(),
    },
    [
      {
        id: '3',
        name: 'Smoothie de Fresa',
        description: 'Vaso 16 oz.',
        price: 3.5,
        recommended: true,
        active: true,
        categoryId: '1',
        createdAt: new Date(),
        lastModified: new Date(),
      },
      {
        id: '4',
        name: 'Smoothie de Mango',
        description: 'Vaso 16 oz.',
        price: 3.25,
        recommended: false,
        active: true,
        categoryId: '2',
        createdAt: new Date(),
        lastModified: new Date(),
      },
    ],
  ],
])
