import { forwardRef, SelectHTMLAttributes } from 'react';
import * as S from './style';

type SelectProps = SelectHTMLAttributes<HTMLInputElement> & {
	label: string;
	disabled: boolean;
	required: boolean;
};

export const Select = forwardRef<HTMLInputElement, SelectProps>((props, ref) => {
	const { label = '', disabled = false, required = false, name = '' } = props;

	return (
		<S.Container>
			<S.ContainerLabel>
				<S.Label disabled={disabled}>{label}</S.Label>
				{required && <S.RequiredField>*</S.RequiredField>}
			</S.ContainerLabel>
			<S.Select name={name} disabled={disabled}>
				<S.Options value="" disabled selected>
					Selecione
				</S.Options>
			</S.Select>
		</S.Container>
	);
});
