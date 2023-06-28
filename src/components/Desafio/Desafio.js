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
  margin-bottom: 20px;
`;

export function Desafio({ titulo, descricao }) {
  return (
    <DesafioBox>
      <Grid md="8">
        {/* // fazer um unico componente de texto melhor  */}
        <h3
          style={{
            fontSize: FontSizes.TWO,
            fontWeight: FontWeights.SEMIBOLD,
            margin: 0,
          }}
        >
          {titulo}
        </h3>
        <p
          style={{
            fontSize: FontSizes.ONE_HALF,
            marginBottom: 0,
          }}
        >
          {descricao}
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
            transform: "scale(2.5)",
            padding: "2px",
            height: "24px",
            width: "24px",
          }}
        />
      </Grid>
    </DesafioBox>
  );
}
