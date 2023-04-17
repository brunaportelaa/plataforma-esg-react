import styled from 'styled-components'
import { Colors, FontSizes, TextTransform, Spaces } from '../../shared/DesignTokens'

export const ButtonLink = styled.a`
    color: ${Colors.HIGHLIGHT_GREEN};
    font-size: ${FontSizes.ONE_HALF};
    text-transform: ${TextTransform.UPPERCASE};
    margin-top: ${Spaces.ONE};
`