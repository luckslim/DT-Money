import * as  Dialog from "@radix-ui/react-dialog"
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./style";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from 'zod';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../lib/axios";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
})
type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;
export function NewTransactionsModal() {
    const { createTransaction} = useContext(TransactionsContext)

    const {
        reset,
        control,
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema)
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        // await new Promise(resolve => setTimeout(resolve, 2000))
        // console.log(data)
        const { description, price, category, type } = data;

        await createTransaction({
            description,
            price,
            category,
            type,
        })
        reset();
    }
    return (

        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <CloseButton>< X size={20} /> </CloseButton>
                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        {...register('description')} type="text" placeholder="Descrição" required />
                    <input
                        {...register('price', { valueAsNumber: true })} type="number" placeholder="Preço" required />
                    <input
                        {...register('category')} type="text" placeholder="Categoria" required />
                    <Controller
                        control={control}
                        name="type"
                        render={(field) => {
                            console.log(field)
                            return (
                                <TransactionType 
                                onValueChange={field.field.onChange} 
                                value={field.field.value}>
                                    <TransactionTypeButton variant="income" value="income">
                                        <ArrowCircleUp size={24} />
                                        Entradas
                                    </TransactionTypeButton>
                                    <TransactionTypeButton variant="outcome" value="outcome">
                                        <ArrowCircleDown size={24} />
                                        Saídas
                                    </TransactionTypeButton>
                                </TransactionType>
                            );
                        }}
                    />

                    <button type="submit" disabled={isSubmitting}>Cadastrar</button>
                </form>
            </Content>
        </Dialog.Portal>

    );
}