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
 

const Reports = () => {
    return ( 
        <>
        <LogoNormal/>
        <section className='py-5 px-4 h-dvh'>
            <Header/>
                <Carousel className="w-full max-w-xs flex justify-center">
                    <CarouselContent>
                        <CarouselItem>
                            <div className="p-1">
                                <Card className='flex justify-center'>
                                    <CardContent className="flex flex-col aspect-square items-center justify-center p-2">
                                        <VictoryPieChart type={'income'}/>
                                        <h2 className="text-xl">Income</h2>
                                        <div className="py-2 flex gap-1">
                                            <div className="border rounded-full w-2 h-2 bg-border"></div>
                                            <div className="border rounded-full w-2 h-2"></div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex flex-col aspect-square items-center justify-center p-2">
                                    <VictoryPieChart type={'expense'}/>
                                    <h2 className="text-xl">Expenses</h2>
                                    <div className="py-2 flex gap-1">
                                            <div className="border rounded-full w-2 h-2"></div>
                                            <div className="border rounded-full w-2 h-2 bg-border"></div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            {/* <VictoryPieChart type={'income'}/>
            <VictoryPieChart type={'expense'}/> */}
        </section>
        <NavBar/>
        </>
    )
}

export default Reports