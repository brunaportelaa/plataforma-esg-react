import styled from "styled-components";
import {
  Colors,
  FontFamilies,
  FontLineHeights,
  FontSizes,
  FontWeights,
} from "../../shared/DesignTokens";

export const HeadingOne = styled.h1`
  font-family: ${FontFamilies.PRIMARY};
  font-weight: ${FontWeights.MEDIUM};
  line-height: ${FontLineHeights.MEDIUM};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: 0;
`;

HeadingOne.defaultProps = {
  color: Colors.BLACK,
  margin: 0,
  fontSize: FontSizes.THREE,
};
