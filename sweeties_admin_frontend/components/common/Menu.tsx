import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

type MenuProps = {
  anchorEl: React.ReactNode
  children: React.ReactNode
}

export default function Menu({ anchorEl, children }: MenuProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{anchorEl}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          asChild
          sideOffset={5}
          align='end'
          className='min-w-[7rem] max-w-[17.5rem] rounded-[0.25rem] shadow-md py-2 bg-background will-change-[opacity,transform] data-[side=top]:animate-slide-down-and-fade data-[side=right]:animate-slide-left-and-fade data-[side=bottom]:animate-slide-up-and-fade data-[side=left]:animate-slide-right-and-fade'>
          <ul>{children}</ul>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
