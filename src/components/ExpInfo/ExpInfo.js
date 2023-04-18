import LinearProgress from '@mui/joy/LinearProgress';
import { Colors, FontWeights } from '../../shared/DesignTokens';
import { BodyText } from '../../common-components/BodyText/BodyText';

export const ExpInfo = () => {

    return (
        <div>
        <BodyText fontWeight={FontWeights.BOLD}>Level 32</BodyText>
        <BodyText fontWeight={FontWeights.BOLD} color={Colors.GREEN_700}>27.890 XP | 40.000 XP</BodyText>
        <LinearProgress
            variant="soft"
            determinate value={70}
        />
        </div>
    )
};