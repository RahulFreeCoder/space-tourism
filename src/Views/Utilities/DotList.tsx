import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export type DotListProps = {
    menues: {
        name:string,
        selected?: boolean;
    }[];
}

const Dots = styled.div`
    display:flex;
    margin: 5px;

`;

const DotButtons = styled.button`
    cursor: pointer;
    border: 0;
    margin: .5rem;    
    padding: 0.5em;
    border-radius: 50%;
    background-color: rgba(255,255,255,.25);
    &[aria-selected="true"]{
        background-color: rgba(255,255,255,1);
    }   
    &:hover,
    &:focus{
        background-color: rgba(255,255,255,0.5);
    } 
`;

const DotList : FunctionComponent<DotListProps> = (props) => {
    const { menues } = props;
     return (
        <Dots>
            {menues.map(({name, selected}) => 
                <DotButtons key={name} aria-selected={selected} />
            )}
        </Dots>      
     );
} 

export default DotList;
