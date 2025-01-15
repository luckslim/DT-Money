import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"
import logoImg from "../../assets/Dtlogo.svg"
import * as  Dialog from "@radix-ui/react-dialog"
import { NewTransactionsModal } from "../NewTransactionModal";
export function Header() {
    return (
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <img src={logoImg} alt="" />
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <NewTransactionButton>
                                Nova Transação
                            </NewTransactionButton>
                        </Dialog.Trigger>
                        <NewTransactionsModal/>
                    </Dialog.Root>

                </HeaderContent>
            </HeaderContainer>
        </div>
    );
}