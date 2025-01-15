import * as  Dialog from "@radix-ui/react-dialog"
import { CloseButton, Content, Overlay } from "./style";
import { X } from "phosphor-react";
export function NewTransactionsModal() {
    return (

        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <CloseButton>< X size={20}/> </CloseButton>
                <form action="">
                    <input type="text" placeholder="Descrição" required />
                    <input type="number" placeholder="Preço" required />
                    <input type="text" placeholder="Categoria" required />
                    <button>Cadastrar</button>
                </form>
            </Content>
        </Dialog.Portal>

    );
}