import React, { Children } from 'react'

type ChoiceGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode
  label?: React.ReactNode
  size?: 'large' | 'medium' | 'small'
  className?: string
}

export default function ChoiceGroup({
  children,
  label="",
  size = 'large',
  className,
  ...props
}: ChoiceGroupProps) {
  const Size = {
    large: <h1 className='text-2xl p-4 border-b border-gray-700'>{label}</h1>,
    medium: <h3 className='text-xl p-4 pb-2 border-b border-gray-700'>{label}</h3>,
    small: <h4 className='text-white p-4 pb-1 border-b border-gray-700'>{label}</h4>,
  }

  const childrenArray = Children.toArray(children)

  return (
    <>
      <div className='bg-black text-white'>
      {label && Size[size]}
      <div {...props} className={className}>
        {childrenArray.map((child, index) => (
          <React.Fragment key={index}>
            <div className='border-b border-gray-700  p-2'>
           
            {child}
            </div>
          </React.Fragment>
        ))}
      </div>
      </div>
    </>
  )
}
