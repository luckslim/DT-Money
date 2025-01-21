import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";



export function Transactions() {
    const { transactions } = useContext(TransactionsContext)
    console.log(transactions)
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />

                <TransactionsTable>

                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceHighlight variant={transaction.type}>
                                            R${transaction.price}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>`{transaction.createdAt}</td>
                                </tr>
                            )
                        })}
                        {/* <tr>
                            <td width="50%"> Desenvolvimento do site</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                     - R$ 12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr> */}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>

        </div>
    );
}
