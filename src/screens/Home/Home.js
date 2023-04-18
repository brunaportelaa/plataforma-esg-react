import { BodyText } from '../../common-components/BodyText/BodyText'
import { HeadingOne } from '../../common-components/HeadingOne/HeadingOne'
import { HeadingTwo } from '../../common-components/HeadingTwo/HeadingTwo'
import { Categorias } from '../../components/Categorias/Categorias'
import { SidebarNav } from '../../components/SideMenu/SideMenu'
import { Flex, Box } from 'reflexbox'
import { Spaces } from '../../shared/DesignTokens'
import { Desafio } from '../../components/Desafio/Desafio'

export function Home() {
    return (
        <>
            <Flex>
                <SidebarNav />
                <Box p={Spaces.FOUR} width={1}>
                    <HeadingOne>Categorias</HeadingOne>
                    <Categorias />
                    <HeadingOne margin={'30px 0'}>Seus desafios</HeadingOne>
                    <Desafio />
                </Box>
            </Flex>
        </>
    )
}