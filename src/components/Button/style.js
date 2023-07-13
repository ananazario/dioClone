import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button `
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #fff;
    padding: 2px 12px;
    min-width: 128px;
    width: 100%;

    ${({ variant }) => variant !== 'primary' && css`
        min-width: 167px;
        height: 32px;
        background: #e4145d;

        &:hover {
            opacity: .6;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e4145d;
            top: -5px;
            left: -8px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`