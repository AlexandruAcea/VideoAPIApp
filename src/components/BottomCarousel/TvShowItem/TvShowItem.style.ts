import styled, { css } from 'styled-components/native';

interface Props {
    isFirstItem: boolean
}

export const TvShowItemBody = styled.View<Props>`
    width: 150px;
    height: 250px;
    margin-left: 10px;

    ${({ isFirstItem }) =>
        isFirstItem && css`
            margin-left: 30px;
    `};
`;