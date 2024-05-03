import styled from 'styled-components';
import { ButtonColors, TextColors } from '../../style/theme';

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

export const CancelButton = styled.button`
	padding: 4px 32px;
	border-radius: 4px;
	border: 1px solid ${ButtonColors.ButtonCancel};
	background-color: ${ButtonColors.ButtonSecondaryRest};
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	color: ${TextColors.Text};

	&:hover {
		border: 1px solid ${ButtonColors.ButtonCancelHover};
		color: ${TextColors.TextSelect};
	}
`;

export const NextButton = styled.button`
	padding: 4px 32px;
	border-radius: 4px;
	border: 1px solid ${ButtonColors.ButtonNext};
	background-color: ${ButtonColors.ButtonNext};
	font-size: 16px;
	font-weight: 400;
	line-height: 24px;
	color: ${TextColors.TextNext};

	&:hover {
		border: 1px solid ${ButtonColors.ButtonNextHover};
		background-color: ${ButtonColors.ButtonNextHover};
		color: ${TextColors.TextNext};
	}
`;

export const CloseButton = styled.button`
	border: none;
	background-color: transparent;
`;

export const CloseTextButton = styled.p`
	font-size: 20px;
	font-weight: 650;
	color: ${TextColors.Text};
`;
