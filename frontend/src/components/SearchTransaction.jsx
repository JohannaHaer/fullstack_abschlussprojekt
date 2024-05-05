import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SearchTransaction = () => {
    return (
        <>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input name="description" placeholder="Nach Stichwort suchen" />
            </div>
        </>
    )
}

export default SearchTransaction