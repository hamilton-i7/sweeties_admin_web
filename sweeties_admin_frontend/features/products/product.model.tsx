import { ITimestamp } from '@/utils/models'

export interface IProduct extends ITimestamp {
  id: string
  name: string
  description?: string
  price: number
  recommended: boolean
  active: boolean
  imgPath?: string
  imgUrl?: string
  category: string
}
