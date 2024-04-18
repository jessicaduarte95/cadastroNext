import { forwardRef, SelectHTMLAttributes } from 'react';
import * as S from './style';

type InputProps = {
	label: string;
	disabled: boolean;
};

export const Input = (props: InputProps) => {
	const { label, disabled } = props;

	return (
		<S.Container>
			<S.Label disabled={disabled}>{label}</S.Label>
			<S.Input></S.Input>
		</S.Container>
	);
};
