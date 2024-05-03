import styled from 'styled-components';
import { TextColors, SelectColors } from '../../style/theme';

interface Props {
	disabled?: boolean;
	hasError?: string | undefined;
}

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const Select = styled.select<Props>`
	padding: 4px 16px;
	border-radius: 2px;
	outline: none;
	color: ${TextColors.TextSelectDisabled};
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;

	${(props: Props) =>
		props.disabled
			? `
		background-color: ${SelectColors.SelectDisabledBackground};
		border: 1px solid ${SelectColors.SelectPrimaryRest};
		`
			: ``}

	${(props: Props) =>
		props.hasError
			? `
		border: 1px solid ${TextColors.Error};
		&:hover {
			border: 1px solid ${TextColors.Error};
		}
	
		&:focus {
			border: 1px solid ${TextColors.Error};
		}
		`
			: `
		border: 1px solid ${SelectColors.SelectPrimaryRest};
		&:hover {
			border: 1px solid ${SelectColors.SelectPrimaryHover};
		}
	
		&:focus {
			border: 1px solid ${SelectColors.SelectPrimarySelected};
		}
		`}
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
