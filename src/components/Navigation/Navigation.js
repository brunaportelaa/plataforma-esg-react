import styled from "styled-components";
import { Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider } from "@mui/material";
import DashboardIcon from '../../assets/icons/Dashboard-Icon.svg'
import { HeadingTwo } from "../../common-components/HeadingTwo/HeadingTwo";
const NavIcon = styled.img.attrs((props) => ({ src: props.src }))
    `
 width: 20px;   
`;

export function Navigation() {
    return (
        <Box>
            <nav>
                <List>
                    <ListItemButton>
                        <ListItem disablePadding>
                            <NavIcon src={DashboardIcon} />
                            <HeadingTwo>Dashboard</HeadingTwo>
                        </ListItem>
                    </ListItemButton>
                </List>
            </nav>
        </Box>
    )
}