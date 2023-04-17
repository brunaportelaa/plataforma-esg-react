import styled from "styled-components";
import { Colors, Spaces } from "../../shared/DesignTokens";
import { UserInfo } from "../UserInfo/UserInfo";
import { ExpInfo } from "../ExpInfo/ExpInfo";
import { Navigation } from "../Navigation/Navigation";

export const SidebarNav = () => {

    const SidebarDiv = styled.div`
        width: 300px;
        padding: ${Spaces.FOUR};
        background-color: ${Colors.GREY_100};
        `
    
    return (
        <SidebarDiv>
            <UserInfo />
            <ExpInfo />
            <Navigation />
        </SidebarDiv>
    )
};