import { BodyText } from "../../common-components/BodyText/BodyText";
import { HeadingOne } from "../../common-components/HeadingOne/HeadingOne";
import { HeadingTwo } from "../../common-components/HeadingTwo/HeadingTwo";
import { Categorias } from "../../components/Categorias/Categorias";
import { SidebarNav } from "../../components/SideMenu/SideMenu";
import { Spaces } from "../../shared/DesignTokens";
import { Desafio } from "../../components/Desafio/Desafio";
import { Grid } from "@mui/material";

export function Home() {
  return (
    <>
      <Grid container direction={"row"}>
        <Grid item md="3">
          <SidebarNav />
        </Grid>
        <Grid item md="9" padding={Spaces.FOUR}>
          <HeadingOne>Categorias</HeadingOne>
          <Categorias />

          <HeadingOne margin={"30px 0"}>Seus desafios</HeadingOne>
          <Desafio />
        </Grid>
      </Grid>
    </>
  );
}
