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
  font-weight: ${(props) => props.fontWeight};
  line-height: ${FontLineHeights.MEDIUM};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: 0;
`;

BodyText.defaultProps = {
  color: Colors.GREY_500,
  margin: 0,
  fontWeight: FontWeights.REGULAR,
  fontSize: FontSizes.ONE_QUARTER,
};
