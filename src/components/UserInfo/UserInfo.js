import { BodyText } from "../../common-components/BodyText/BodyText";
import { HeadingOne } from "../../common-components/HeadingOne/HeadingOne"
import { Flex, Box } from "reflexbox";
import styled from "styled-components";
import { Spaces } from "../../shared/DesignTokens";
import { ButtonLink } from "../../common-components/ButtonLink/ButtonLink";


const UserAvatar = styled.div`
    width: 80px;
    height: 80px;
    background-color: #000000;
    border-color: #FF0000;
    margin-right: ${Spaces.ONE_HALF};
`;

export const UserInfo = () => {
    return (
    
    <Flex>
    <Box>
        <UserAvatar/>
    </Box>
    <Box>
    <HeadingOne>Olá,Bruna</HeadingOne>
    <BodyText>Nome da Empresa</BodyText>
    <ButtonLink>Ver Perfil</ButtonLink>
    </Box>
    </Flex>

    )
};