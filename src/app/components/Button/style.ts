import styled from 'styled-components';
import { ButtonColors } from '../../style/theme';

export const ButtonAdicionar = styled.button`
    padding: 4px 32px;
    border-radius: 4px;
    border: 1px solid ${ButtonColors.ButtonPrimaryRest};
    font-size: 16px;
    background-color: ${ButtonColors.ButtonSecondaryRest};
    color: ${ButtonColors.ButtonPrimaryRest};

    &:hover {
        background-color: ${ButtonColors.ButtonSecondaryHover};
    }
`;
