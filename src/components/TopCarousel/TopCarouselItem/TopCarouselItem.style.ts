import styled from 'styled-components/native'

export const TopCarouselItemBody = styled.View`
    height: 200px;
    width: 100%;

    border-radius: 5px;
    background: white;
`;

export const Background = styled.ImageBackground`
    flex: 1;
    z-index: 1;
`;

export const InnerItem = styled.View`
    position: absolute;
    bottom: 20px;
    left: 10px;
    z-index: 100;
`;