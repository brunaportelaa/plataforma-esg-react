import styled from "styled-components"
import { Colors, Spaces } from "../../shared/DesignTokens"
import { UserInfo } from "../UserInfo/UserInfo"

export const SidebarNav = () => {

    const SidebarDiv = styled.div`
        width: 250px;
        padding: ${Spaces.ONE_HALF};
        background-color: ${Colors.GREY_100};
        `
    
    return (
        <SidebarDiv>
            <UserInfo />
        </SidebarDiv>
    )
}