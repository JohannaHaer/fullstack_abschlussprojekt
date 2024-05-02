import React, { useContext, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    FormLabel,
    FormDescription
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { addExpenseCategory, addIncomeCategory } from '@/functions/fetches/addCategoryFetch'





const addCategoryFormSchema = z.object({
    categoryName: z.string(),
})
const AddCategory = ({type}) => {
    const addCategoryForm = useForm({
        resolver: zodResolver(addCategoryFormSchema),
        defaultValues: {
            categoryName: "",
        },
    })
    const handleAddCategorySubmit = (values) =>{
        console.log('test add')
        type = 'income'
        if (type=='income'){
            addIncomeCategory(values)
        }else if(type=='expense'){
            addExpenseCategory(values)
        } else{
            console.log('no valid transaction type selected')
        }
    }
  return (
    <div>
        <Form {...addCategoryForm} >
                <form onSubmit={addCategoryForm.handleSubmit(handleAddCategorySubmit)} className="space-y-6 flex flex-col">
                <FormField
                        control={addCategoryForm.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Categoriename</FormLabel>
                                <FormControl>
                                    <Input placeholder="Add Categorie" {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='text-lg' id='transactionButton'>Add Category</Button>
                </form>
            </Form>
    </div>
  )
}

export default AddCategory
