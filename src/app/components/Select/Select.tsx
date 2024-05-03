import { forwardRef, SelectHTMLAttributes } from 'react';
import * as S from './style';

type Option = {
	value: number;
	label: string;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
	label: string;
	disabled: boolean;
	requiredField: boolean;
	options: Option[];
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
	const { label = '', disabled = false, requiredField = false, name = '', options, ...rest } = props;

	return (
		<S.Container>
			<S.ContainerLabel>
				<S.Label disabled={disabled}>{label}</S.Label>
				{requiredField && <S.RequiredField>*</S.RequiredField>}
			</S.ContainerLabel>
			<S.Select name={name} disabled={disabled} {...rest} ref={ref}>
				<S.Options value="">Selecione</S.Options>
				{options.map((option: Option, index: any) => {
					return (
						<S.Options key={index} value={option.value}>
							{option.label}
						</S.Options>
					);
				})}
			</S.Select>
		</S.Container>
	);
});
