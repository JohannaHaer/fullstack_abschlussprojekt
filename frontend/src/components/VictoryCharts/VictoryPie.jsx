import React from 'react'
import { VictoryPie } from 'victory'

const VictoryPieTest = () => {
    return (
        <>
        <VictoryPie
        data = {[
            {x: 'Cats', y: 35},
            {x: 'Dogs', y: 60},
            {x: 'Birds', y: 40}
        ]}
        />
        </>
    )
}

export default VictoryPieTest