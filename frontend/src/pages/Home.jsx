import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const Home = () => {
    return (
        <>
        <section className='px-4 h-dvh'>
            <Card className="py-14 h-dvh w-full " >
                <CardHeader className="h-3/6 w-full flex flex-col gap-12">
                    <div className="flex justify-between">
                        <div>
                            <p>welcome back,</p>
                            <CardTitle>User</CardTitle>
                        </div>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" className="w-14 rounded-full"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <Card className=" bg-slate-200 rounded-lg h-3/6 " >
                        <p className='px-4 py-4'>your Card or whatever</p>
                    </Card>
                </CardHeader>
                <CardContent className="w-full flex flex-col gap-5">
                    <h3 className='pb-8 text-2xl'>Total wallet</h3>
                        <div>
                            <div className='flex w-full gap-x-8 justify-center'>
                                <div className='bg-slate-200 rounded-lg w-3/6 h-36'>
                                    <div className='py-4 px-4'>
                                        <div className='w-12 h-12 bg-red-200 rounded-full flex justify-center items-center'>
                                            <img src="./src/assets/img/trending-up.png" alt="trending up icon" />
                                        </div>
                                        <p>Income</p>
                                        <p>+ $</p>
                                    </div>
                                </div>
                                <div className='bg-slate-200 rounded-lg w-3/6 h-36 '>
                                    <div className='px-4 py-4'>
                                        <div className='w-12 h-12 bg-red-200 rounded-full flex justify-center items-center '>
                                            <img src="./src/assets/img/trending-down.png" alt="trending down icon" />
                                        </div>
                                        <p>Expense</p>
                                        <p>- $</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className='bg-slate-200 rounded-full px-4 py-4'>
                        <div className='flex items-center  justify-between'>
                            <div className='flex items-center gap-4'>
                                <div className='w-12 h-12 bg-red-200 rounded-full flex justify-center items-center '>
                                    <img className='m-2' src="./src/assets/img/alert-triangle.png" alt="trending down icon" />
                                </div>
                                <div>
                                    <p>Monthly spending limit</p>
                                    <p>$ 6.000</p>
                                </div>
                            </div>
                            <img className='m-2' src="./src/assets/img/more-horizontal.png" alt="" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    </>
    )
}

export default Home