import React, { ReactElement, FC } from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps }  from './Typography';

import Numbered, { NumberProps }  from './Numbered';

const WidgetWrapper = styled.div`
    background-color: black;
    width: 100%;
    height:100%;
`;
export default {
    title: 'Components/Utilities/Typography',
    component: Numbered,
    decorators: [
        (Story:FC): ReactElement => (
            <WidgetWrapper >
                <Story />
        .    </WidgetWrapper>
        )
    ]
}

export const NumberHeading =  () : ReactElement<NumberProps>=> ( 
<div>
    
    <Typography variant='numbered' > <Numbered>01</Numbered> Colors</Typography>
</div>
);
