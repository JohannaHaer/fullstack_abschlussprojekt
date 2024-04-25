import SetupAccountForm from '@/components/SetupAccountForm'
import Toggle from '@/components/Toggle'
import React from 'react'

const SetupAccount = () => {
    return (
        <section className='flex flex-col align-center text-center h-dvh gap-5 p-5'>
            <SetupAccountForm/>
            <Toggle/>
        </section>
    )
}

export default SetupAccount