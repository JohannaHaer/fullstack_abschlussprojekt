import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Home = () => {
    return (
        <>
        <section className='px-4 h-dvh'>
        <div className="flex space-x-44 my-12">
            <div>
            <p>welcome back,</p>
            <h2>User Name</h2>
            </div>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
        <div className='w-80 h-40 bg-red-200 rounded-lg'>
            <p className='py-6 px-4'>your Card or whatever</p>
        </div>
        <h3 className='my-12'>Total wallet</h3>
        <div className='flex w-80 gap-x-8'>
            <div className='bg-slate-200 rounded-lg w-36 h-36'>
                <div className='py-4 px-4'>
                    <div className='w-12 h-12 bg-red-200 rounded-full'>
                        <img src="" alt="" />
                    </div>
                    <p>Income</p>
                    <p>+ $</p>
                </div>
            </div>
            <div className='bg-slate-200 rounded-lg w-36 h-36 '>
            <div className='px-4 py-4'>
            <div className='w-12 h-12 bg-red-200 rounded-full'>
                        <img src="" alt="" />
                    </div>
                <p>Expense</p>
                <p>- $</p>
            </div>
            </div>
        </div>
        </section>


        
        </>
    )
}

export default Home