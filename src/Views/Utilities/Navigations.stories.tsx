import React, { ReactElement, FC } from 'react';
import styled from 'styled-components';
import Navigations , {NavigationProps, ListItemProps} from './Navigations';

const WidgetWrapper = styled.div`
    background-color: black;
    width: 100%;
    height:100%;
`;
export default {
    title: 'Components/Utilities/Navigation',
    component: Navigations,
    decorators: [
        (Story:FC): ReactElement => (
            <WidgetWrapper >
                <Story />
        .    </WidgetWrapper>
        )
    ]
}


export const NaviagtionElem =  () : ReactElement<NavigationProps> => {    
    const menuesprops: NavigationProps = {menues:[{id:'01', menue:'Active', active: true}, {id:'02', menue:'hovered', active: false}, {id:'03', menue:'Idle', active: false}] }
    return <Navigations menues={menuesprops.menues} />
};

