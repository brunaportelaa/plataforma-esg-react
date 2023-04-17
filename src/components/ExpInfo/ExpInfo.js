import LinearProgress from '@mui/joy/LinearProgress';
import { Colors } from '../../shared/DesignTokens';
import { BodyText } from '../../common-components/BodyText/BodyText';

export const ExpInfo = () => {

    return (
        <div>
        <BodyText>Level 32</BodyText>
        <BodyText>27.890 XP | 40.000 XP</BodyText>
        <LinearProgress
            variant="soft"
            determinate value={70}
        />
        </div>
    )
};