'use client'
import React, { useEffect } from 'react'
import { ImageProps } from './Type'

const Image = ({theme}:ImageProps) => {

  return (
    <div>
   { theme === "dark" ?
    (<picture className='w-full'>
        <source srcSet="/images/bg-desktop-dark.jpg" media="(min-width: 701px)"/>
        <source srcSet="/images/bg-mobile-dark.jpg" media="(max-width: 700px)"/>
        <img src="/images/bg-desktop-dark.jpg" alt="todo image" className='w-full h-1/3 sm:h-auto' />
      </picture>)
:
      (<picture className='w-full'>
        <source srcSet="/images/bg-desktop-light.jpg" media="(min-width: 701px)"/>
        <source srcSet="/images/bg-mobile-light.jpg" media="(max-width: 700px)"/>
      <img src="/images/bg-desktop-light.jpg" alt="todo image" className='w-full h-1/3 sm:h-auto' />
      </picture>)
    }
    </div>
  )
}

export default Image
