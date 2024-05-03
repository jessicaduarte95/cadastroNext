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

export const ContainerLabel = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Label = styled.label<Props>`
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
	color: ${(props: Props) => (props.disabled ? TextColors.TextSelectDisabled : TextColors.TextSelect)};
`;

export const RequiredField = styled.span`
	color: red;
	margin-left: 2px;
`;

export const Input = styled.input<Props>`
	padding: 4px 14px;
	border-radius: 2px;
	outline: none;
	font-size: 16px;
	line-height: 16px;
	font-weight: 400;

	&::placeholder {
		color: ${TextColors.TextSelectDisabled};
	}

	${(props: Props) =>
		props.hasError
			? `border: 1px solid ${TextColors.Error};
		&:hover {
			border: 1px solid ${TextColors.Error};
		}
	
		&:focus {
			border: 1px solid ${TextColors.Error};
		}`
			: `border: 1px solid ${SelectColors.SelectPrimaryRest};
		&:hover {
			border: 1px solid ${SelectColors.SelectPrimaryHover};
		}
	
		&:focus {
			border: 1px solid ${SelectColors.SelectPrimarySelected};
		}
		`};
`;
