import styled from "styled-components";
import {
  Colors,
  FontFamilies,
  FontLineHeights,
  FontSizes,
  FontWeights,
  TextTransform,
} from "../../shared/DesignTokens";

export const HeadingTwo = styled.h2`
  font-family: ${FontFamilies.PRIMARY};
  font-weight: ${FontWeights.SEMIBOLD};
  line-height: ${FontLineHeights.MEDIUM};
  font-size: ${FontSizes.ONE_QUARTER};
  text-transform: ${TextTransform.UPPERCASE};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: 0;
`;

HeadingTwo.defaultProps = {
  color: Colors.GREY_500,
  margin: 0,
};
