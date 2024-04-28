import RegisterForm from '@/components/RegisterForm'
import LogoNormal from '@/components/logo/LogoNormal'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/login')
    }

    return (
        <>
            <LogoNormal/>
            <section className='flex flex-col align-center text-center h-dvh gap-5 p-5'>
                <h1 className='text-center text-2xl font-bold mt-10'>Create an Account</h1>
                <p className='text-center'>Fill out the following form to create your account.</p>
                <RegisterForm/>
                <p className='text-lg mt-5'>Already have an Account? <span onClick={navigateLogin} className='text-[#06434E] dark:text-[#FFDE59] font-bold'>Login</span></p>
            </section>
        </>
    )
}

export default Register