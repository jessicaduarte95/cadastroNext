'use client';

import { Modal } from '../../components/Modal/Modal';
import { Title, SubTitle } from '../../components/Text/Text';
import * as S from './style/ModalInserirStyle';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Select } from '../../components/Select/Select';
import { Input } from '../../components/Input/Input';
import { CancelButton, NextButton } from '../../components/Button/Button';

type ModalInserirProps = {
	isOpen: boolean;
	handleCloseModal: () => void;
};

const schema = z.object({
	profissional: z.string(),
	banco: z.string(),
	tipoConta: z.string(),
	tipoPessoa: z.string(),
	estado: z.string(),
	agencia: z.number({
		errorMap: () => {
			return {
				message: 'Invalid'
			};
		}
	}),
	conta: z.number({
		errorMap: () => {
			return {
				message: 'Invalid'
			};
		}
	}),
	cpf: z.string().min(11, { message: 'Invalid' }),
	telefone: z.string().min(9, { message: 'Invalid' }),
	nome: z.string().min(9, { message: 'Invalid' }),
	cep: z.string().min(8, { message: 'Invalid' }),
	cidade: z.string().min(7, { message: 'Invalid' }),
	endereco: z.string().min(10, { message: 'Invalid' }),
	numEndereco: z.number({
		errorMap: () => {
			return {
				message: 'Invalid'
			};
		}
	})
});

export const ModalInserir = (props: ModalInserirProps) => {
	const { isOpen, handleCloseModal } = props;

	type FormProps = z.infer<typeof schema>;

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<FormProps>({
		mode: 'all',
		reValidateMode: 'onChange',
		resolver: zodResolver(schema)
	});

	const handleForm = (data: FormProps) => {
		try {
			const result = schema.parse(data);
			console.log(result);
			reset();
		} catch (error) {
			console.log('Erro: ', error);
		}
	};

	return (
		<Modal isOpen={isOpen} width={'880px'}>
			<S.ContainerTitle>
				<Title>Ativar o Bank</Title>
				<p>x</p>
			</S.ContainerTitle>
			<form onSubmit={handleSubmit(handleForm)}>
				<S.Container>
					<SubTitle>Preencha os itens a seguir para configurar o Bank</SubTitle>
					<S.ContainerAlert>
						<strong>
							<S.Alert>Atenção!!! Verifique atentamente a cada dado preenchido no cadastro de sua conta.</S.Alert>
						</strong>
						<S.Lista>
							<S.Alert>Caso queira cadastrar uma conta de banco CNPJ, verifique se a sua conta corrente é CNPJ e preencha o CPF correto do responsável da conta.</S.Alert>
						</S.Lista>
						<S.Lista>
							<S.Alert>O preenchimento incorreto das informações pode trazer transtornos no momento da transferência do valor para essa conta corrente.</S.Alert>
						</S.Lista>
						<S.Lista>
							<S.Alert>Se possível preencha com calma para não ocorrer erros.</S.Alert>
						</S.Lista>
					</S.ContainerAlert>
					<Select {...register('profissional')} label={'Profissional:'} disabled={false} requiredField={true}></Select>
					<S.ContainerFields>
						<Select {...register('banco')} label={'Banco:'} disabled={false} requiredField={true}></Select>
						<Select {...register('tipoConta')} label={'Tipo de conta:'} disabled={false} requiredField={true}></Select>
					</S.ContainerFields>
					<S.ContainerFields>
						<Input
							{...register('agencia', {
								setValueAs: v => parseInt(v)
							})}
							type="number"
							label={'Agência:'}
							placeholder="Digite aqui"
							disabled={false}
							requiredField={true}
							hasError={errors.agencia?.message}
						/>
						<Input
							{...register('conta', {
								setValueAs: v => parseInt(v)
							})}
							type="number"
							label={'Conta com dígito:'}
							placeholder="Digite aqui"
							disabled={false}
							requiredField={true}
							hasError={errors.conta?.message}
						/>
					</S.ContainerFields>
					<S.ContainerFields>
						<Select {...register('tipoPessoa')} label={'Tipo de pessoa:'} disabled={false} requiredField={true}></Select>
						<Input {...register('cpf')} type="text" label={'CPF:'} placeholder="Digite aqui" disabled={false} requiredField={true} hasError={errors.cpf?.message} />
						<Input {...register('telefone')} type="text" label={'Telefone:'} placeholder="Digite aqui" disabled={false} requiredField={true} hasError={errors.telefone?.message} />
					</S.ContainerFields>
					<Input {...register('nome')} type="text" label={'Nome completo:'} placeholder="Digite aqui" disabled={false} requiredField={true} hasError={errors.nome?.message} />
					<S.ContainerFields>
						<Input {...register('cep')} type="text" label={'CEP:'} placeholder="Digite aqui" disabled={false} requiredField={true} hasError={errors.cep?.message} />
						<Select {...register('estado')} label={'Estado:'} disabled={false} requiredField={true}></Select>
						<Input {...register('cidade')} type="text" label={'Cidade:'} placeholder="Digite aqui" disabled={false} requiredField={true} hasError={errors.cidade?.message} />
					</S.ContainerFields>
					<S.ContainerFields>
						<Input {...register('endereco')} type="text" label={'Endereço:'} placeholder="Digite aqui" disabled={false} requiredField={true} hasError={errors.endereco?.message} />
						<Input
							{...register('numEndereco', {
								setValueAs: v => parseInt(v)
							})}
							type="number"
							label={'Número:'}
							placeholder="Digite aqui"
							disabled={false}
							requiredField={true}
							hasError={errors.numEndereco?.message}
						/>
					</S.ContainerFields>
				</S.Container>
				<S.ContainerButtons>
					<CancelButton
						onClick={() => {
							handleCloseModal();
							reset();
						}}>
						Cancelar
					</CancelButton>
					<NextButton type="submit">Concluir</NextButton>
				</S.ContainerButtons>
			</form>
		</Modal>
	);
};
