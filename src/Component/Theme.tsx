"use client"
import React, { useState, useEffect } from 'react'
import { ThemeProps } from './Type'

const Theme = ({theme, toggleTheme}:ThemeProps) => {
    
    return (
        <div className='flex justify-between w-full mb-4'>
            <h1 className='text-white text-3xl font-semibold'>TODO</h1>
            <button onClick={toggleTheme}>
                {theme === 'light' ?
                    (<img src="/images/icon-moon.svg" alt='Dark Mode Icon' className='w-6 h-6' />)
                    :
                    (<img src='/images/icon-sun.svg' alt='Light Mode Icon' className='w-6 h-6' />)}
            </button>
        </div>
    )
}

export default Theme
