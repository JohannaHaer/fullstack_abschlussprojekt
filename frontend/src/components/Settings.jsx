import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import LogoNormal from './logo/LogoNormal'

const Settings = () => {
    return (
        <>
        <LogoNormal/>
        <section className='py-10 px-4 h-dvh'>
            <Header/>
            <h1>Settings</h1>
        </section>
        <NavBar/>
        </>
    )
}

export default Settings