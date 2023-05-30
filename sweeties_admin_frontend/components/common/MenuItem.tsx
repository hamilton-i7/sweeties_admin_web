import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

type MenuItemProps = {
  text: string
}

export default function MenuItem({ text }: MenuItemProps) {
  return (
    <DropdownMenu.Item
      asChild
      className='w-full h-12 flex items-center px-3 data-[highlighted]:bg-[#1E1A1D1F] focus:outline-none leading-none select-none label-l'>
      <li>{text}</li>
    </DropdownMenu.Item>
  )
}
