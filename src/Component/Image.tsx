import React from 'react'

const Image = () => {
  return (
    <picture className='w-full'>
        <source srcSet="/images/bg-desktop-light.jpg" media="(min-width: 701px)"/>
        <source srcSet="/images/bg-desktop-dark.jpg" media="(min-width: 701px) and (prefers-color-scheme: dark)"/>
        <source srcSet="/images/bg-mobile-light.jpg" media="(max-width: 700px)"/>
        <source srcSet="/images/bg-mobile-dark.jpg" media="(max-width: 700px) and (prefers-color-scheme: dark)"/>
        <img src="/images/bg-desktop-dark.jpg" alt="todo image" className='w-full h-1/3 sm:h-auto' />
      </picture>
  )
}

export default Image
