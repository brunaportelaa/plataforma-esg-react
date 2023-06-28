import styled from "styled-components";
import GerreiroEcologio from "../../assets/images/GuerreiroEcologico.png";
import HeroiComunitario from "../../assets/images/HeroiComunitario.png";
import InovadorSustentável from "../../assets/images/InovadorSustentável.png";
import MagoDaSabedoriaHidrica from "../../assets/images/MagoDaSabedoriaHidrica.png";
import MestreEficienciaEnergetica from "../../assets/images/MestreEficienciaEnergetica.png";
import CampeaoReciclagem from "../../assets/images/CampeaoReciclagem.png";
import EmbaixadorVerde from "../../assets/images/EmbaixadorVerde.png";
import EsmagadorCarbono from "../../assets/images/EsmagadorCarbono.png";
import { HeadingTwo } from "../../common-components/HeadingTwo/HeadingTwo";
import { Grid } from "@mui/material";
import { HeadingOne } from "../../common-components/HeadingOne/HeadingOne";



const ConquistaBox = styled.div`
  margin:20px;
  display: flex;
  width: 25%;
  height: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;

`;

const ConquistaImg = styled.img.attrs((props) => ({ src: props.src }))`
  width: 200px;
`;


export function Conquista() {
  return (
    <Grid container justifyContent={"space-arround"}>
      <ConquistaBox>
        <ConquistaImg src={GerreiroEcologio} alt="GerreiroEcologio" />
        <HeadingOne>Gerreiro Ecológico</HeadingOne>
        <HeadingTwo>Completou 7 tarefas em uma semana</HeadingTwo>
      </ConquistaBox>
      <ConquistaBox>
        <ConquistaImg src={HeroiComunitario} alt="Icone Heroi Comunitario" />
        <HeadingOne>Herói Ecológico Comunitário</HeadingOne>
        <HeadingTwo>Completou 7 tarefas da categoria <strong>Social</strong></HeadingTwo>
      </ConquistaBox>
      <ConquistaBox>
        <ConquistaImg src={InovadorSustentável} alt="Icone Heroi Comunitario" />
        <HeadingOne>Inovador Sustentável</HeadingOne>
        <HeadingTwo >Submeteu 12 ideias para novas tarefas</HeadingTwo>
      </ConquistaBox>
      <ConquistaBox>
        <ConquistaImg src={MagoDaSabedoriaHidrica } alt="Icone Mago da Sabedoria Hidrica " />
        <HeadingOne>Mago da Sabedoria Hídrica</HeadingOne>
        <HeadingTwo >Completou 7 tarefas da categoria <strong>Água</strong></HeadingTwo>
      </ConquistaBox>
      <ConquistaBox>
        <ConquistaImg src={MestreEficienciaEnergetica} alt="Icone Mestre da Eficiencia Energetica" />
        <HeadingOne>Mestre da Eficiência Energética</HeadingOne>
        <HeadingTwo >Completou 7 tarefas da categoria <strong>Energia</strong></HeadingTwo>
      </ConquistaBox>
      <ConquistaBox>
        <ConquistaImg src={CampeaoReciclagem} alt="Icone Campeao de Reciclagem" />
        <HeadingOne>Campeão da Reciclagem</HeadingOne>
        <HeadingTwo >Completou 7 tarefas da categoria <strong>Reciclagem</strong></HeadingTwo>
      </ConquistaBox>
      <ConquistaBox>
        <ConquistaImg src={EmbaixadorVerde} alt="Icone Embaixador Verde" />
        <HeadingOne>Embaixador Verde</HeadingOne>
        <HeadingTwo >Completou 7 tarefas em grupo</HeadingTwo>
      </ConquistaBox>
      <ConquistaBox>
        <ConquistaImg src={EsmagadorCarbono} alt="Icone Esmagador da Pegada de Carbono.png" />
        <HeadingOne>Esmagador da Pegada de Carbono</HeadingOne>
        <HeadingTwo >Completou 7 tarefas da categoria <strong>transporte</strong></HeadingTwo>
      </ConquistaBox>
    </Grid>
  );
}