import { BodyText } from "../../common-components/BodyText/BodyText";
import { HeadingOne } from "../../common-components/HeadingOne/HeadingOne"
import { Flex, Box } from "reflexbox";
import styled from "styled-components";
import { FontSizes, Spaces } from "../../shared/DesignTokens";
import { ButtonLink } from "../../common-components/ButtonLink/ButtonLink";


const UserAvatar = styled.div`
    width: 60px;
    height: 60px;
    background-color: #000000;
    border-color: #FF0000;
    margin: 0 ${Spaces.ONE_HALF} ${Spaces.FOUR} 0;
`;

export const UserInfo = () => {
    return (
    
    <Flex>
    <Box>
        <UserAvatar/>
    </Box>
    <Box>
    <HeadingOne fontSize={FontSizes.TWO}>Olá, Bruna</HeadingOne>
    <BodyText fontSize={FontSizes.ONE_HALF}>Nome da Empresa</BodyText>
    <ButtonLink>Ver Perfil</ButtonLink>
    </Box>
    </Flex>

    )
};