import styled from "styled-components";
import {
  Colors,
  FontFamilies,
  FontLineHeights,
  FontSizes,
  FontWeights,
} from "../../shared/DesignTokens";

export const BodyText = styled.p`
  font-family: ${FontFamilies.PRIMARY};
  font-weight: ${FontWeights.REGULAR};
  line-height: ${FontLineHeights.SMALL};
  font-size: ${FontSizes.ONE_HALF};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: 0;
`;

BodyText.defaultProps = {
  color: Colors.GREY_500,
  margin: 0,
};
