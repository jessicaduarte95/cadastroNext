import { forwardRef, InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import * as S from './style';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	disabled: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { label, disabled, ...rest } = props;

	return (
		<S.Container>
			<S.Label disabled={disabled}>{label}</S.Label>
			<S.Input {...rest}></S.Input>
		</S.Container>
	);
});
