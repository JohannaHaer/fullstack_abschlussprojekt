// ! Da es Fälle gibt, in denen eine Transaction nicht mehr gewünscht ist, können diese im Bereich Transaction gelöscht werden
// Diese jsx ist in das TransactionForm.jsx eingebunden
import React from 'react'
import { Card } from './ui/card'
import { Button } from "@/components/ui/button"
import { removeTransaction } from "@/functions/fetches/editTransactionsFetchtes"

const DeleteTransaction = ({setDeleteCard, deleteTransaction}) => {
    
    // The Delete button deletes the transaction with the unique transaction id and closes the card again
    const handleDeleteTransaction = ()=>{
        removeTransaction(deleteTransaction)
        setDeleteCard(false)
    }

    // If the user decides not to delete the transaction after all, they can close the card again using the Keep button
    const handleKeepButton = () => {
        setDeleteCard(false)
    }
    return (
        <>
            <Card className='z-10 border fixed w-80 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className="p-4">
                    <p className="text-center">Are you sure you want to delete this element?</p>
                    <div className="flex justify-center gap-10 pt-4">
                        <Button onClick={handleKeepButton}>Keep</Button>
                        <Button variant='outline' onClick={handleDeleteTransaction}>Delete</Button>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default DeleteTransaction