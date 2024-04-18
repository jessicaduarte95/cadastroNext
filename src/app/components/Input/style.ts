import styled from 'styled-components';
import { TextColors, SelectColors } from '../../style/theme';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const Label = styled.label<{ disabled: boolean }>`
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
	color: ${({ disabled }) => (disabled ? TextColors.TextSelectDisabled : TextColors.TextSelect)};
`;

export const Input = styled.input`
	padding: 4px 16px;
	border-radius: 2px;
	outline: none;
	border: 1px solid ${SelectColors.SelectPrimaryRest};

	&:hover {
		border: 1px solid ${SelectColors.SelectPrimaryHover};
	}

	&:focus {
		border: 1px solid ${SelectColors.SelectPrimarySelected};
	}
`;
