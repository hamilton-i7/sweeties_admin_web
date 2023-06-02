'use client'

import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'
import SmallToolbar from './common/SmallToolbar'
import avatar from '@/public/avatar.svg'
import Image from 'next/image'
import IconButton from './common/button/IconButton'

type FeedProps = {
  anchorEl?: React.ReactNode
}

export default function Feed({ anchorEl }: FeedProps) {
  return anchorEl ? (
    <Dialog.Root>
      <Dialog.Trigger asChild>{anchorEl}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='scrim' />
        <Dialog.Content asChild>
          <aside className='w-80 md:w-[26.25rem] h-screen rounded-l-[2rem] fixed top-0 right-0 bg-[#F9F2F9] overflow-y-auto data-[state=open]:animate-slide-in-left outline-none'>
            <SmallToolbar
              title='Actividad reciente'
              actions={
                <Dialog.Close asChild>
                  <IconButton>
                    <span className='material-icons-round'>close</span>
                  </IconButton>
                </Dialog.Close>
              }
            />
            <div className='py-8 px-4 flex flex-col gap-3'>
              <FeedItem
                name='Jessica Edwards'
                message='agregó un producto'
                date='Hace 2 minutos'
              />
              <FeedItem
                name='Jessica Edwards'
                message='agregó un producto'
                date='Hace 4 minutos'
              />
              <FeedItem
                name='Abigail Clarke'
                message='actualizó un producto'
                date='Hace 5 horas'
              />
              <FeedItem
                name='Juan Hamilton'
                message='desactivó un producto'
                date='Hace 3 días'
              />
              <FeedItem
                name='Juan Hamilton'
                message='agregó un producto'
                date='Hace 1 semana'
              />
            </div>
          </aside>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  ) : (
    <aside className='w-[18.75rem] h-[50rem] overflow-y-auto rounded-lg border-[0.0625rem] border-solid border-outline py-6 px-4'>
      <h3 className='title-m mb-6'>Actividad reciente</h3>
      <div className='flex flex-col gap-3'>
        <FeedItem
          name='Jessica Edwards'
          message='agregó un producto'
          date='Hace 2 minutos'
        />
        <FeedItem
          name='Jessica Edwards'
          message='agregó un producto'
          date='Hace 4 minutos'
        />
        <FeedItem
          name='Abigail Clarke'
          message='actualizó un producto'
          date='Hace 5 horas'
        />
        <FeedItem
          name='Juan Hamilton'
          message='desactivó un producto'
          date='Hace 3 días'
        />
        <FeedItem
          name='Juan Hamilton'
          message='agregó un producto'
          date='Hace 1 semana'
        />
      </div>
    </aside>
  )
}

type FeedItemProps = {
  name: string
  message: string
  date: string
}

function FeedItem({ name, message, date }: FeedItemProps) {
  return (
    <article className='flex items-start gap-2'>
      <Image src={avatar} alt='Imagen del usuario' className='w-10 h-10' />
      <div>
        <p className='body-m'>
          <span className='font-medium'>{name}</span> {message}
        </p>
        <p className='label-s text-on-surface-variant mr-1'>{date}</p>
      </div>
    </article>
  )
}
