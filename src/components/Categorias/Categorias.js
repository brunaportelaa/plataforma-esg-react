import styled from "styled-components";
import SocialImg from "../../assets/icons/social-icon.svg";
import ReciclagemImg from "../../assets/icons/recycle-icon.svg";
import SaudeImg from "../../assets/icons/health-icon.svg";
import EnergiaImg from "../../assets/icons/energy-icon.svg";
import { HeadingTwo } from "../../common-components/HeadingTwo/HeadingTwo";
import { BorderRadiuses, Colors } from "../../shared/DesignTokens";
import { Grid } from "@mui/material";

const CategoriaBox = styled.div`
  margin: 6px;
  display: flex;
  width: 22%;
  height: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.GREEN_400};
  border-radius: ${BorderRadiuses.TWO};
`;

const CategoriaIcon = styled.img.attrs((props) => ({ src: props.src }))`
  width: 30px;
`;

export function Categorias() {
  return (
    <Grid container justifyContent={"space-between"}>
      <CategoriaBox>
        <CategoriaIcon src={ReciclagemImg} alt="Ícone de Reciclagem" />
        <HeadingTwo color={Colors.WHITE}>Reciclagem</HeadingTwo>
      </CategoriaBox>
      <CategoriaBox>
        <CategoriaIcon src={EnergiaImg} alt="Ícone de Energia" />
        <HeadingTwo color={Colors.WHITE}>Energia</HeadingTwo>
      </CategoriaBox>
      <CategoriaBox>
        <CategoriaIcon src={SocialImg} alt="Ícone de Social" />
        <HeadingTwo color={Colors.WHITE}>Social</HeadingTwo>
      </CategoriaBox>
      <CategoriaBox>
        <CategoriaIcon src={SaudeImg} alt="Ícone de Saúde" />
        <HeadingTwo color={Colors.WHITE}>Saúde</HeadingTwo>
      </CategoriaBox>
    </Grid>
  );
}
