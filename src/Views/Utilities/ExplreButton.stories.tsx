import React, { ReactElement, FC } from 'react';
import styled from 'styled-components';
import ExploreButton , {ExploreButtonProps} from './ExploreButton';

const WidgetWrapper = styled.div`
    background-color: black;
    width: 100%;
    height:100%;
`;
export default {
    title: 'Components/Utilities/Button',
    component: ExploreButton,
    decorators: [
        (Story:FC): ReactElement => (
            <WidgetWrapper >
                <Story />
        .    </WidgetWrapper>
        )
    ]
}

export const ExploreButtonElem =  () : ReactElement<ExploreButtonProps>=> (<ExploreButton onClick={(e) => console.log(e)}>Explore</ExploreButton>);
