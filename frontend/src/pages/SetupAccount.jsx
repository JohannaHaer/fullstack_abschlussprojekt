import SetupAccountForm from '@/components/SetupAccountForm'
import LogoNormal from '@/components/logo/LogoNormal'
import React from 'react'

const SetupAccount = () => {
    return (
        <>
            <LogoNormal/>
            <section className='flex flex-col align-center text-center h-dvh gap-5 p-5'>
                <SetupAccountForm/>
            </section>
        </>
    )
}

export default SetupAccount