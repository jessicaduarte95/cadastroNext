import styled from 'styled-components';
import { TextColors, SelectColors } from '../../style/theme';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const Select = styled.select<{ disabled: boolean }>`
	padding: 4px 16px;
	border-radius: 2px;
	outline: none;
	border: 1px solid ${SelectColors.SelectPrimaryRest};
	color: ${TextColors.TextSelectDisabled};
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;

	&:hover {
		border: 1px solid ${SelectColors.SelectPrimaryHover};
	}

	&:focus {
		border: 1px solid ${SelectColors.SelectPrimarySelected};
	}

	&:disabled {
		background-color: ${SelectColors.SelectDisabledBackground};
		border: 1px solid ${SelectColors.SelectPrimaryRest};
	}
`;

export const Options = styled.option`
	color: ${TextColors.Options};
	font-size: 14px;
`;

export const ContainerLabel = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Label = styled.label<{ disabled: boolean }>`
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
	color: ${({ disabled }) => (disabled ? TextColors.TextSelectDisabled : TextColors.TextSelect)};
`;

export const RequiredField = styled.span`
	color: red;
	margin-left: 2px;
`;
