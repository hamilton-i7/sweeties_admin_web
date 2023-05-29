import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

type MenuProps = {
  anchorEl: HTMLElement
}

export default function Menu({ anchorEl }: MenuProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <>{anchorEl}</>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content asChild>
          <menu className='min-w-[7rem] max-w-[17.5rem] rounded-[0.25rem] shadow-md px-3 py-2 bg-background'>
            <DropdownMenu.Item asChild>
              <li className='w-full h-12 flex items-center'>Testing</li>
            </DropdownMenu.Item>
          </menu>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

type MenuItemProps = {
  text: string
}

function MenuItem({ text }: MenuItemProps) {
  return (
    <DropdownMenu.Item asChild>
      <li className='w-full h-12 flex items-center'>{text}</li>
    </DropdownMenu.Item>
  )
}
