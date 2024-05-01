import Header from "@/components/Header"
import NavBar from "@/components/NavBar"
import VictoryPieChart from "@/components/VictoryCharts/VictoryPie"
import LogoNormal from "@/components/logo/LogoNormal"
import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ReportForm from "@/components/ReportForm"
 

const Reports = () => {
    return ( 
        <>
        <LogoNormal/>
        <section className='py-5 px-4 h-dvh'>
            <Header/>
                <h1 className="text-2xl font-bold pt-10 text-[#0097B2] dark:text-[#FFDE59]">Report</h1>
                <Carousel className="w-full flex justify-center">
                    <CarouselContent>
                        <CarouselItem>
                                <Card className='flex justify-center'>
                                    <CardContent className="flex flex-col aspect-square items-center justify-center p-2">
                                        <VictoryPieChart type={'income'}/>
                                        <h2 className="text-xl text-[#0097B2] dark:text-[#0097B2]">Income</h2>
                                        <div className="py-10 flex gap-1">
                                            <div className="border rounded-full w-2 h-2 bg-border"></div>
                                            <div className="border rounded-full w-2 h-2"></div>
                                        </div>
                                        <ReportForm type={'income'}/>
                                    </CardContent>
                                </Card>
                        </CarouselItem>
                        <CarouselItem>
                                <Card className='flex justify-center'>
                                    <CardContent className="flex flex-col aspect-square items-center justify-center p-2">
                                        <VictoryPieChart type={'expense'}/>
                                        <h2 className="text-xl text-[#0097B2] dark:text-[#0097B2]">Expenses</h2>
                                        <div className="py-10 flex gap-1">
                                            <div className="border rounded-full w-2 h-2"></div>
                                            <div className="border rounded-full w-2 h-2 bg-border"></div>
                                        </div>
                                        <ReportForm type={'expense'}/>
                                    </CardContent>
                                </Card>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
        </section>
        <NavBar/>
        </>
    )
}

export default Reports