import styled from "styled-components";
import { Colors, FontFamilies, FontSizes, FontWeights } from "../../shared/DesignTokens";

const Green = styled.h2`
    color: ${Colors.WHITE};
    font-weight: ${FontWeights.THIN};
    font-family: ${FontFamilies.PRIMARY};    
    font-size: ${FontSizes.THREE};
    margin: 0;
`;

const Metric = styled.span `
    color: ${Colors.GREEN_200};
    font-weight: ${FontWeights.MEDIUM};

`

export const Logo = () => {

    return (
        <Green>Green<Metric>Metric</Metric></Green>
    )

}