import React from 'react'

const Image = () => {
  return (
    <picture className='block z-50 w-fit object-cover'>
        <source src="/images/bg-desktop-light.jpg" media="(min-width: 901px)"/>
        <source src="/images/bg-desktop-dark.jpg" media="(min-width: 901px)"/>
        <source src="/images/bg-mobile-dark.jpg" media="(max-width: 900px)"/>
        <source src="/images/bg-mobile-light.jpg" media="(max-width: 900px)"/>
        <img src="/images/bg-desktop-dark.jpg" alt="todo image" />
      </picture>
  )
}

export default Image
