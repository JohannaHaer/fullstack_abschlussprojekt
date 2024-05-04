import { mainContext } from '@/context/mainProvider';
import React, { useContext } from 'react'
import { VictoryChart, VictoryLine, VictoryClipContainer, VictoryAxis } from 'victory';

const VictoryLineChart = () => {
    const {user} = useContext(mainContext)

    // Query of user data via mainProvider from the backend and storage of necessary key-values pairs of transactions (transactionArray) and array (clearedTransactionArray) for storing the merged key-value pairs
    const transactions = user?.transactions
    const transactionArray = []    

    // Differentiation of the data according to their type, storage of date and amount in the transactionArray

    transactions?.map((transaction) => {
        if(transaction.type == 'expense') {
            transactionArray.push({x: transaction.date, y: - transaction.amount})
        } else {
            transactionArray.push({x: transaction.date, y: transaction.amount})
        }
    })
    const sortedTransactions = transactionArray.sort((a, b) => new Date(a.x) - new Date(b.x));

    // Daten vorverarbeiten, um kumulierte Werte zu berechnen
    const processedData = []
    let cumulativeIncome = 0
    let cumulativeExpense = 0

    sortedTransactions?.map(transaction => {
        // Kumulative Werte aktualisieren
        if (transaction.y > 0) {
            cumulativeIncome += transaction.y
        } else {
            cumulativeExpense -= transaction.y
        }

        // Objekt für kumulative Daten erstellen
        processedData.push({
            x: new Date(transaction.x), // Datum in ein JavaScript-Datumsobjekt konvertieren
            y: cumulativeIncome - cumulativeExpense
        })
    })
    console.log('processed', processedData);

const getScaleColor = () => {
    return document.documentElement.classList.contains('dark') ? 'white' : '#06434E';
}
    
    return (
        <div className='p-2 bg-accent rounded-lg'>
            <VictoryChart>
                <VictoryAxis
                    style={{ axis: { stroke: getScaleColor() }, tickLabels: { fill: getScaleColor() } }}
                    tickFormat={(date) => {
                        const formattedDate = new Date(date)
                        const month = formattedDate.toLocaleString('en-US', { month: 'short' });
                        const year = formattedDate.getFullYear();
                        return `${month} ${year}`;
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    style={{ axis: { stroke: getScaleColor() }, tickLabels: { fill: getScaleColor() } }}
                />
                <VictoryLine
                    groupComponent={<VictoryClipContainer/>}
                    style={{ data: { stroke: "tomato", strokeWidth: 5, strokeLinecap: "round" }}}
                    data={processedData.map((data) => ({x: data.x, y: data.y}))}
                    domain={{ y: [0, Math.max(...processedData.map(data => data.y)) + 100] }}
                />
            </VictoryChart>
        </div>
    )
}

export default VictoryLineChart