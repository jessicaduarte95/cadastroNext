import { forwardRef, InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import * as S from './style';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	disabled: boolean;
	requiredField: boolean;
	hasError?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { label = '', disabled, requiredField, name = '', type, hasError, ...rest } = props;

	return (
		<S.Container>
			<S.ContainerLabel>
				<S.Label disabledField={disabled}>{label}</S.Label>
				{requiredField && <S.RequiredField>*</S.RequiredField>}
			</S.ContainerLabel>
			<S.Input hasError={hasError} type={type} name={name} {...rest} ref={ref}></S.Input>
		</S.Container>
	);
});
