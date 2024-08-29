"use client"
import React, { useState, useEffect } from 'react'

const Theme = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const getTheme = localStorage.getItem('theme') || 'light'
        document.documentElement.classList.add(getTheme)
        setTheme(getTheme)

    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        document.documentElement.classList.remove(theme)
        document.documentElement.classList.add(newTheme)
        localStorage.setItem('theme', newTheme)
        setTheme(newTheme)
    }


    return (
        <div className='flex justify-between'>
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
