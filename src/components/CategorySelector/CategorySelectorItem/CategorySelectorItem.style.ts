import styled, { css } from 'styled-components/native';

interface Props {
    selected: boolean;
}

export const CategorySelectorItemBody = styled.View<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    border-radius: 50px;
    padding: 0 10px;
    height: 30px;
    margin-right: 10px;
    margin-top: 50px;

    ${({ selected }) =>
        selected && css`
            background-color: white;
            color: black;
    `};
`;