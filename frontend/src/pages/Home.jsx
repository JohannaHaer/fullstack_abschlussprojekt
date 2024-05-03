import React, { useContext } from 'react'
import imageTrendingUp from "@/assets/img/trending-up.png"
import imageTrendingDown from "@/assets/img/trending-down.png"
import imageHorizontal from "@/assets/img/more-horizontal.png"
import imageAlertTriangle from "@/assets/img/alert-triangle.png"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Toggle from '@/components/Toggle'
import NavBar from '@/components/NavBar'
import { mainContext } from '@/context/mainProvider'
import VictoryLineChart from '@/components/VictoryCharts/VictoryLine'
import HeaderNormal from '@/components/header/HeaderNormal'

const Home = () => {
    const {allIncome, allExpenses} = useContext(mainContext)


    return (
        <>
        <HeaderNormal/>
        <section className='py-5 px-4 h-dvh'>
            <VictoryLineChart/>
            <Card className="py-14 h-dvh w-full " >
                <CardHeader className="h-3/6 w-full flex flex-col gap-12">
                    <Card className=" bg-accent rounded-lg h-3/6 " >
                        <p className='px-4 py-4'>your Card or whatever</p>
                    </Card>
                </CardHeader>
                <CardContent className="w-full flex flex-col gap-5">
                    <h3 className='pb-8 text-2xl'>Total wallet</h3>
                        <div>
                            <div className='flex w-full gap-x-8 justify-center'>
                                <div className='bg-accent rounded-lg w-3/6 h-36'>
                                    <div className='py-4 px-4'>
                                        <div className='w-12 h-12 bg-muted rounded-full flex justify-center items-center'>
                                            <img src={imageTrendingUp}/>
                                        </div>
                                        <p>Income</p>
                                        <p>+ $ <span>{allIncome}</span></p>
                                    </div>
                                </div>
                                <div className='bg-accent rounded-lg w-3/6 h-36 '>
                                    <div className='px-4 py-4'>
                                        <div className='w-12 h-12 bg-muted rounded-full flex justify-center items-center '>
                                            <img src={imageTrendingDown} />
                                        </div>
                                        <p>Expense</p>
                                        <p>- $ <span>{allExpenses}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className='bg-accent rounded-full px-4 py-4'>
                        <div className='flex items-center  justify-between'>
                            <div className='flex items-center gap-4'>
                                <div className='w-12 h-12 bg-muted rounded-full flex justify-center items-center '>
                                    <img className='m-2' src={imageAlertTriangle} />
                                </div>
                                <div>
                                    <p>Monthly spending limit</p>
                                    <p>$ 6.000</p>
                                </div>
                            </div>
                            <img className='m-2' src={imageHorizontal} />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
        <Toggle/>
        <NavBar/>
    </>
    )
}

export default Home