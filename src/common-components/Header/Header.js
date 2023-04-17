import styled from "styled-components";
import { Colors, Spaces } from "../../shared/DesignTokens";
import { Logo } from "../Logo/Logo";



const Wrapper = styled.header`
    width: 100%;
    height: 60px;
    background-color: ${Colors.GREEN_700};
    padding: ${Spaces.TWO};
`


export const Header = () => {

return (
    <Wrapper>
        <Logo />
    </Wrapper>
)

};