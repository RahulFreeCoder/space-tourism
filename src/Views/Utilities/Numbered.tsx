import React,  { FunctionComponent, HtmlHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
interface INumberProps {

}

export type NumberProps = INumberProps & HtmlHTMLAttributes<HTMLParagraphElement>;

const Component = styled.span<NumberProps>`
    padding-left: 0.15em;
    margin-right: .5em;
    font-weight: 700;
    color: white;
    opacity: 0.25;
`;

const Numbered: FunctionComponent<NumberProps> = (props) => {
    const {
        children,
        ...rest
    } = props;

    return (
        <Component>
            {children}
        </Component>
    );
};

export default Numbered;