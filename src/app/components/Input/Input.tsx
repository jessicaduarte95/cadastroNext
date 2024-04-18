import { forwardRef, InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import * as S from './style';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	disabled: boolean;
	required: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { label, disabled, required, ...rest } = props;

	return (
		<S.Container>
			<S.ContainerLabel>
				<S.Label disabled={disabled}>{label}</S.Label>
				{required && <S.RequiredField>*</S.RequiredField>}
			</S.ContainerLabel>
			<S.Input {...rest}></S.Input>
		</S.Container>
	);
});
