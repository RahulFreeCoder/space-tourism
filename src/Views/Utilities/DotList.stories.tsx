import React, { ReactElement, FC } from 'react';
import styled from 'styled-components';
import DotList , {DotListProps} from './DotList';

const WidgetWrapper = styled.div`
    background-color: black;
    width: 100%;
    height:100%;
`;
export default {
    title: 'Components/Utilities/DotList',
    component: DotList,
    decorators: [
        (Story:FC): ReactElement => (
            <WidgetWrapper >
                <Story />
        .    </WidgetWrapper>
        )
    ]
}


export const DotListElem =  () : ReactElement<DotListProps> => {    
    const menuesprops: DotListProps = {menues:[{name:'moon', selected:true},{name:'mars'}, {name:'Europa'}] }
    return <DotList menues={menuesprops.menues} />
};

