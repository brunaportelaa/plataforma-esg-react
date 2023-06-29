import styled from "styled-components";
import { Box, List, ListItem, ListItemButton, Divider } from "@mui/material";
import DashboardIcon from "../../assets/icons/Dashboard-Icon.svg";
import CategoriasIcon from "../../assets/icons/Categorias-Icon.svg";
import ConquistasIcon from "../../assets/icons/Conquistas-Icon.svg";
import PremiosIcon from "../../assets/icons/Premios-Icon.svg";
import TarefasIcon from "../../assets/icons/Tarefas-Icon.svg";
import SairIcon from "../../assets/icons/Sair-Icon.svg";
import { HeadingTwo } from "../../common-components/HeadingTwo/HeadingTwo";
import { Colors } from "../../shared/DesignTokens";
import { useLocation, useNavigate } from "react-router-dom";

const NavIcon = styled.img.attrs((props) => ({ src: props.src }))`
  width: 20px;
  filter: ${(props) =>
    props.active &&
    "invert(55%) sepia(21%) saturate(650%) hue-rotate(75deg) brightness(91%) contrast(94%)"};
`;

export function Navigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Box>
      <nav>
        <List>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItem className="nav-item" disablePadding>
              <NavIcon src={DashboardIcon} />
              <HeadingTwo
                color={pathname === "/" ? Colors.GREEN_500 : Colors.GREY_500}
                margin={"0 0 0 8px"}
              >
                Dashboard
              </HeadingTwo>
            </ListItem>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItem className="nav-item" disablePadding>
              <NavIcon src={CategoriasIcon} />
              <HeadingTwo margin={"0 0 0 8px"}>Categorias</HeadingTwo>
            </ListItem>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItem className="nav-item" disablePadding>
              <NavIcon src={TarefasIcon} />
              <HeadingTwo margin={"0 0 0 8px"}>Suas tarefas</HeadingTwo>
            </ListItem>
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => navigate("/conquistas")}>
            <ListItem className="nav-item" disablePadding>
              <NavIcon
                src={ConquistasIcon}
                active={pathname === "/conquistas"}
              />
              <HeadingTwo
                margin={"0 0 0 8px"}
                color={
                  pathname === "/conquistas"
                    ? Colors.GREEN_500
                    : Colors.GREY_500
                }
              >
                Conquistas
              </HeadingTwo>
            </ListItem>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItem className="nav-item" disablePadding>
              <NavIcon src={PremiosIcon} />
              <HeadingTwo margin={"0 0 0 8px"}>Prêmios</HeadingTwo>
            </ListItem>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItem className="nav-item" disablePadding>
              <NavIcon color={Colors.RED} src={SairIcon} />
              <HeadingTwo color={Colors.RED} margin={"0 0 0 8px"}>
                Sair
              </HeadingTwo>
            </ListItem>
          </ListItemButton>
        </List>
      </nav>
    </Box>
  );
}
