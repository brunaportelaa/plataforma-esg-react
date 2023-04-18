import styled from "styled-components"
import { Colors } from "../../shared/DesignTokens";

const DesafioBox = styled.div`
    width: 100%,
    background-color: ${Colors.GREEN_500},
`

export function Desafio() {
    return (
        <DesafioBox>Testando</DesafioBox>
    );
}