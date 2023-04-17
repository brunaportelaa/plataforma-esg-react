import { BodyText } from '../../common-components/BodyText/BodyText'
import { HeadingOne } from '../../common-components/HeadingOne/HeadingOne'
import { HeadingTwo } from '../../common-components/HeadingTwo/HeadingTwo'
import { CategoriaItem } from '../../components/CategoriaItem/CategoriaItem'
import { SidebarNav } from '../../components/SideMenu/SideMenu'
import { Flex, Box } from 'reflexbox'

export function Home() {
    return (
        <>
            <Flex>
                    <SidebarNav />
                <Box>
                    <HeadingOne>Categorias</HeadingOne>
                    <HeadingTwo>Dashboard</HeadingTwo>
                    <BodyText>Uma ótima tarefa para aqueles que costumam ser os últimos a sair:
                        mande uma foto do ar desligado toda vez que for embora.</BodyText>
                    <CategoriaItem />
                </Box>
            </Flex>
        </>
    )
}