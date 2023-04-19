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
        <Grid item md="9" padding={Spaces.FOUR} paddingX={Spaces.SIX}>
          <HeadingOne>Categorias</HeadingOne>
          <Categorias />

          <HeadingOne margin={"30px 0"}>Seus desafios</HeadingOne>
          <Desafio
            titulo="Desligue o ar condicionado na saída"
            descricao="Uma ótima tarefa para aqueles que costumam ser os últimos a sair:
mande uma foto do ar desligado toda vez que for embora."
          />

          <Desafio
            titulo="Só papel reciclado"
            descricao="Apenas papel reciclado deve ser utilizado no escritório durante 18 dias. Confirme a tarefa diariamente para
            recolher seus pontos."
          />

          <Desafio
            titulo="Dia de bike"
            descricao="Ideal para quem mora nas redondezas no escritório: venha de bike para o trabalho e deixe o carro em casa!"
          />
        </Grid>
      </Grid>
    </>
  );
}
