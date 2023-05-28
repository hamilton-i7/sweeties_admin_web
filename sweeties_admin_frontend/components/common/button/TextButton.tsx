'use client'

type TextButtonProps = {
  label: string
  className?: string
}

export default function TextButton({ label, className = '' }: TextButtonProps) {
  return (
    <button
      className={`label-l text-primary text-center h-10 min-w-[3rem] px-3 rounded-3xl outline-none hover:bg-[#8d418a14] focus:bg-[#8d418a1f] active:bg-[#8d418a1f] ${className}`}
      type='button'
    >
      {label}
    </button>
  )
}
