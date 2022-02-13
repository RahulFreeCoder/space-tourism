import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export type TabListProps = {
    menues: {
        name:string,
        selected?: boolean;
    }[];
}

const Tabs = styled.div`
    gap: 2rem;
    cursor: pointer;
    padding: 2px;
    border: 0;
    background-color: transparent;
    display: flex; 
`;

const TabButtons = styled.button`
    padding: 1rem 0;
    text-transform: uppercase;
    font-size: 1.1rem;
    font-family: "Barlow Condensed", sans-serif;
    color: lightblue;
    letter-spacing: 2.75px;
    background: transparent;
    border: 0;
    border-bottom: .2rem solid rgba(255, 255, 255, 0);
    &[aria-selected="true"]{
        color: rgba(255,255,255,1);
        border-color: rgba(255,255,255,1);
    }   
    &:hover,
    &:focus{
        border-color: rgba(255,255,255,0.5);
    } 
`;

const TabList : FunctionComponent<TabListProps> = (props) => {
    const { menues } = props;
     return <Tabs>
         {menues.map(({name, selected}) => 
            <TabButtons key={name} aria-selected={selected}>{name}</TabButtons>
        )}      
    </Tabs>;
} 

export default TabList;
