import styled from "styled-components";
import {
  Colors,
  FontSizes,
  FontWeights,
  Spaces,
} from "../../shared/DesignTokens";
import { HeadingTwo } from "../../common-components/HeadingTwo/HeadingTwo";
import { Checkbox, Grid } from "@mui/material";

const DesafioBox = styled.div`
  width: 100%;
  box-shadow: 0px 1px 6px 3px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: ${Spaces.THREE};
  display: flex;
`;

export function Desafio() {
  return (
    <DesafioBox>
      <Grid md="8">
        {/* // fazer um unico componente de texto  */}
        <h3
          style={{
            fontSize: FontSizes.TWO_HALF,
            fontWeight: FontWeights.SEMIBOLD,
            margin: 0,
          }}
        >
          Desligue o ar condicionado na saída
        </h3>
        <p
          style={{
            fontSize: FontSizes.TWO,
            marginBottom: 0,
          }}
        >
          Uma ótima tarefa para aqueles que costumam ser os últimos a sair:
          mande uma foto do ar desligado toda vez que for embora.
        </p>
      </Grid>
      <Grid
        md="4"
        item
        display="flex"
        justifyContent={"end"}
        alignItems={"center"}
        paddingRight={Spaces.FIVE}
      >
        {/* // componentizar checkbox para aplicacao  */}
        <Checkbox
          color="success"
          sx={{
            transform: "scale(3)",
            padding: "2px",
            height: "24px",
            width: "24px",
          }}
        />
      </Grid>
    </DesafioBox>
  );
}
