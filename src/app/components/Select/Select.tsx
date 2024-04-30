import { forwardRef, SelectHTMLAttributes } from 'react';
import * as S from './style';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
	label: string;
	disabled: boolean;
	required: boolean;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
	const { label = '', disabled = false, required = false, name = '', ...rest } = props;

	const options = [
		{
			value: '1',
			label: 'Teste 1'
		},
		{
			value: '2',
			label: 'Teste 2'
		},
		{
			value: '3',
			label: 'Teste 3'
		}
	];

	return (
		<S.Container>
			<S.ContainerLabel>
				<S.Label disabled={disabled}>{label}</S.Label>
				{required && <S.RequiredField>*</S.RequiredField>}
			</S.ContainerLabel>
			<S.Select name={name} disabled={disabled} {...rest} ref={ref}>
				{/* <S.Options value="" disabled>
					Selecione
				</S.Options> */}
				{options.map((option, index) => {
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
