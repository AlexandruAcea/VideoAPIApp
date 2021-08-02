import styled, { css } from 'styled-components/native';

interface Props {
    visible?: boolean;
}

export const Wrapper = styled.View<Props>`
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;

    ${({ visible }) =>
        visible && css`
            opacity: 1;
    `};
`;

export const GoBack = styled.View`
    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 999;
`;

export const PlayPause = styled.View`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`;

export const SliderWrapper = styled.View`
    position: absolute;
    bottom: 30px;
    width: 100%;
    padding: 0 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
`;