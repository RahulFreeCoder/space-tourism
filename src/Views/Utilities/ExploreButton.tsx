import React, { FunctionComponent, ElementType } from 'react';
import styled from 'styled-components';

export type ExploreButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    
}

const Component = styled.button`
    font-size: 2rem;
    text-transform: uppercase;
    margin-top: 2rem;
    margin-left: 2rem;
    position: relative;
    z-index: 1;
    display: inline-grid;
    place-items: center;
    padding: 0 2em;
    border-radius: 50%;
    aspect-ratio: 1;
    text-decoration: none;

    &::after {
        content: '';
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, .1);
        border-radius: 50%;
        opacity: 0;
        transition: opacity 500ms linear, transform 750ms ease-in-out;
    }
    &:hover::after,
    &:focus::after {
        opacity: 1;
        transform: scale(1.5);
    }
`;

const ExploreButton : FunctionComponent<ExploreButtonProps> = (props) => {
const { children , onClick} = props;
return <Component onClick={onClick}> {children}</Component>;
}

export default ExploreButton;