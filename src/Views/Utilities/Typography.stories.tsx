import React, { ReactElement, FC } from 'react';
import styled from 'styled-components';

import Typography, { TypographyProps }  from './Typography';

const WidgetWrapper = styled.div`
    background-color: black;
    width: 100%;
    height:100%;
`;
export default {
    title: 'Components/Utilities/Typography',
    component: Typography,
    decorators: [
        (Story:FC): ReactElement => (
            <WidgetWrapper >
                <Story />
            </WidgetWrapper>
        )
    ]
}

export const Title =  () : ReactElement<TypographyProps>=> <Typography variant='title' >Design System</Typography>;
export const Heading1 =  () : ReactElement<TypographyProps>=> <Typography variant='h1' >Earth</Typography>;
export const Heading2 =  () : ReactElement<TypographyProps>=> <Typography variant='h2' >Venus</Typography>;
export const Heading3 =  () : ReactElement<TypographyProps>=> <Typography variant='h3' >Jupiter & Saturn</Typography>;
export const Heading4 =  () : ReactElement<TypographyProps>=> <Typography variant='h4' >Uranus, Neptune & Pluto</Typography>;
export const Heading5 =  () : ReactElement<TypographyProps>=> <Typography variant='h5' >so you want to travel to space</Typography>;
export const SubHeading1 =  () : ReactElement<TypographyProps>=> <Typography variant='sh1' >384,400 km</Typography>;
export const SubHeading2 =  () : ReactElement<TypographyProps>=> <Typography variant='sh2' >avg. Distance</Typography>;
export const NavText =  () : ReactElement<TypographyProps>=> <Typography variant='nav' >Europe</Typography>;
export const BodyText =  () : ReactElement<TypographyProps>=> <Typography variant='body' >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </Typography>;
export const HeadingText = () : ReactElement<TypographyProps>=> <Typography variant='body' color='lightblue' >Heading 1 - Bellefair Regular - 150px </Typography>;
