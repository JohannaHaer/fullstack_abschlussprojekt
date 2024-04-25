import SetupAccountForm from '@/components/SetupAccountForm'
import React from 'react'
import Toggle from '@/components/Toggle'

const SetupAccount = () => {
    return (
        <section className='flex flex-col align-center text-center h-dvh gap-5 p-5'>
            <SetupAccountForm/>
            <Toggle/>
        </section>
    )
}

export default SetupAccount