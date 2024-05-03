import React from 'react'
import { VictoryChart, VictoryTheme, VictoryLine, VictoryClipContainer } from 'victory';

const VictoryLineChart = () => {
    return (
        <div className='p-0'>
            <VictoryChart>
                <VictoryLine
                    groupComponent={<VictoryClipContainer clipPadding={{ top: 5, right: 10 }}/>}
                    style={{ data: { stroke: "#c43a31", strokeWidth: 15, strokeLinecap: "round" } }}
                    data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: 5, y: 6 }
                    ]}
                />
            </VictoryChart>
        </div>
    )
}

export default VictoryLineChart