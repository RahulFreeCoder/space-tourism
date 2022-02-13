import React,  { FunctionComponent, ElementType, HtmlHTMLAttributes, Ref} from 'react';
import styled, { css } from 'styled-components';
import { SizeVariant } from './SizeVariant';

const sizeVariant: Record<NonNullable<TypographyProps['variant']>, ReturnType<typeof css>> = {
    title: css`
    font-size: 2em;
    text-transform: uppercase;
    `,
    h1: css`
        font-size: clamp(5rem, 8vw + 1rem, 9.375rem);
        font-family: "Bellefair", serif;
        text-transform: uppercase; 
        line-height: 1.1;
    `,
    h2: css`
        font-size: 6.25rem;
        font-family: "Bellefair", serif;
        text-transform: uppercase;
        line-height: 1.1;
        `,
    h3: css`
        font-size: 3.5rem;
        font-family: "Bellefair", serif;
        text-transform: uppercase;
        line-height: 1.1;
        `,
    h4: css`
        font-size: 2rem;
        font-family: "Bellefair", serif;
        text-transform: uppercase;
        line-height: 1.1;
        `,
    h5: css`
        font-size: 1rem;
        font-family: "Barlow Condensed", sans-serif;
        text-transform: uppercase;
        letter-spacing: 4.75px;
    `,
    sh1: css`
        font-size: 1.75rem;
        font-family: "Bellefair", serif;
        text-transform: uppercase;
    `,
    sh2: css`
        font-size: 0.875rem;
        font-family: "Barlow Condensed", sans-serif;
        text-transform: uppercase;
        letter-spacing: 2.35px;
    `,
    numbered: css`
        font-size: 2rem;
        font-family: "Barlow Condensed", sans-serif;
        text-transform: uppercase;
        letter-spacing: 4.75px;
    `,

    nav: css`
    letter-spacing: 2.7px; 
    font-size: 1rem;
    font-family: "Barlow Condensed", sans-serif;
    text-transform: uppercase;
    `,
    body: css` `,};
interface ITypographyProps {
    variant: SizeVariant;
    color?: 'black'| 'white' | 'lightblue';
    disabled?: boolean;
    noWrap?: boolean;
    component?: ElementType;
    forwardedRef?: Ref<any>;
}

export type TypographyProps = ITypographyProps & HtmlHTMLAttributes<HTMLParagraphElement>;

const Component = styled.p<TypographyProps>`
    padding: 2px;
    color: ${({color}) => color ? color : 'white'}; 
    line-height: 1.5;
    font-size: 0.9375rem;
    font-family: "Barlow", sans-serif;
    ${({ variant }) => sizeVariant[variant]}
`;

const Typography: FunctionComponent<TypographyProps> = (props) => {
    const {
        children,
        variant,
        color,
        disabled,
        noWrap,
        forwardedRef,
        ...rest
    } = props;

    return (
        <Component
            variant={variant}
            color={color}
            ref={forwardedRef}
            {...rest}
        >
            {children}
        </Component>
    );
};

export default Typography;