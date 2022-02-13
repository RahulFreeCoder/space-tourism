import React, { ReactElement, FC } from 'react';
import styled from 'styled-components';
import TabList , {TabListProps} from './TabList';

const WidgetWrapper = styled.div`
    background-color: black;
    width: 100%;
    height:100%;
`;
export default {
    title: 'Components/Utilities/TabList',
    component: TabList,
    decorators: [
        (Story:FC): ReactElement => (
            <WidgetWrapper >
                <Story />
        .    </WidgetWrapper>
        )
    ]
}


export const TabListElem =  () : ReactElement<TabListProps> => {    
    const menuesprops: TabListProps = {menues:[{name:'moon', selected:true},{name:'mars'}, {name:'Europa'}] }
    return <TabList menues={menuesprops.menues} />
};

