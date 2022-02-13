import React, {FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

export type NavigationProps = {
    menues : {
        id?: string;
        menue: string;
        active: boolean;
    }[]
}
export type ListItemProps = {
    active: boolean;
}
const Container = styled.div`
    width:100%;
    margin: 30px auto;
`;

const Lists = styled.ul`
    list-style: none;
    padding: 0;
    margin: 1rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(1.5rem);
    display:flex;
    padding: 2rem 0;
    border: 0;
    gap:  clamp(1.5rem, 5vw, 3.5rem);
    background-color: transparent;
`;

const ListItem = styled.li<ListItemProps>`
    cursor: pointer;
    padding-bottom: 1rem; 
    border-bottom: ${({active}) => active ? '.2rem solid rgba(255, 255, 255, 1)' : '.2rem solid rgba(255, 255, 255, 0)'};
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    
    border-bottom: 1 px solid rgba(255,255,255, 1);
    &:hover,
    &:focus{
        border-color: rgba(255,255,255,0.5);
    }   
    a{
        text-decoration: none;      
        letter-spacing: 2.7px;
    }
    span {
        font-weight: 700;
        margin-right: .5em;
    }
    
`;



const Navigations : FunctionComponent<NavigationProps> = (props) => {
    const {menues} = props;
    return <Container>
        <Lists>
            {menues.map(({id, menue, active}) => (
                <ListItem key={menue} active={active}>
                    <span>{id}</span>
                    <a>{menue}</a>
                </ListItem>
            ))}
        </Lists>
    </Container>;
}

export default Navigations;