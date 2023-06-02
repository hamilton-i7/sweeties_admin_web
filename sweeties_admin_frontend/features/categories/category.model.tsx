import { ITimestamp } from '@/utils/models'

export interface ICategory extends ITimestamp {
  id: string
  name: string
  active: boolean
}
