'use client';

import { Modal } from '../../components/Modal/Modal';
import { Title, SubTitle } from '../../components/Text/Text';
import * as S from './style/ModalInserirStyle';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Select } from '../../components/Select/Select';
import { Input } from '../../components/Input/Input';
import { CancelButton, NextButton, CloseButton } from '../../components/Button/Button';
import { options } from '../../../../data';

type ModalInserirProps = {
	isOpen: boolean;
	handleCloseModal: () => void;
};

const schema = z.object({
	profissional: z.number({
		errorMap: () => {
			return {
				message: 'Invalid'
			};
		}
	}),
	banco: z.number({
		errorMap: () => {
			return {
				message: 'Invalid'
			};
		}
	}),
	tipoConta: z.number({
		errorMap: () => {
			return {
				message: 'Invalid'
			};
		}
	}),
	tipoPessoa: z.number({
		errorMap: () => {
			return {
				message: 'Invalid'
			};
		}
	}),
	estado: z.number({
		errorMap: () => {
			return {
				message: 'Invalid'
			};
		}
	}),
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
			handleCloseModal();
			reset();
		} catch (error) {
			handleCloseModal();
			console.log('Erro: ', error);
		}
	};

	return (
		<Modal isOpen={isOpen} width={'880px'}>
			<S.ContainerTitle>
				<Title>Ativar o Bank</Title>
				<CloseButton onClick={handleCloseModal} />
			</S.ContainerTitle>
			<form name="cadastro" onSubmit={handleSubmit(handleForm)}>
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
					<Select
						{...register('profissional', {
							setValueAs: v => parseInt(v)
						})}
						data-testid="profissional"
						label={'Profissional:'}
						disabled={false}
						requiredField={true}
						options={options.profissional}
						hasError={errors.profissional?.message}
					/>
					<S.ContainerFields>
						<Select
							{...register('banco', {
								setValueAs: v => parseInt(v)
							})}
							data-testid="banco"
							label={'Banco:'}
							disabled={false}
							requiredField={true}
							options={options.banco}
							hasError={errors.banco?.message}
						/>
						<Select
							{...register('tipoConta', {
								setValueAs: v => parseInt(v)
							})}
							data-testid="tipoConta"
							label={'Tipo de conta:'}
							disabled={false}
							requiredField={true}
							options={options.tipoConta}
							hasError={errors.tipoConta?.message}
						/>
					</S.ContainerFields>
					<S.ContainerFields>
						<Input
							{...register('agencia', {
								setValueAs: v => parseInt(v)
							})}
							data-testid="agencia"
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
							data-testid="conta"
							type="number"
							label={'Conta com dígito:'}
							placeholder="Digite aqui"
							disabled={false}
							requiredField={true}
							hasError={errors.conta?.message}
						/>
					</S.ContainerFields>
					<S.ContainerFields>
						<Select
							{...register('tipoPessoa', {
								setValueAs: v => parseInt(v)
							})}
							data-testid="tipoPessoa"
							label={'Tipo de pessoa:'}
							disabled={false}
							requiredField={true}
							options={options.tipoPessoa}
							hasError={errors.tipoPessoa?.message}
						/>
						<Input {...register('cpf')} data-testid="cpf" type="text" label={'CPF:'} placeholder="Digite aqui" disabled={false} requiredField={true} hasError={errors.cpf?.message} />
						<Input {...register('telefone')} data-testid="telefone" type="text" label={'Telefone:'} placeholder="Digite aqui" disabled={false} requiredField={true} hasError={errors.telefone?.message} />
					</S.ContainerFields>
					<Input {...register('nome')} data-testid="nome" type="text" label={'Nome completo:'} placeholder="Digite aqui" disabled={false} requiredField={true} hasError={errors.nome?.message} />
					<S.ContainerFields>
						<Input {...register('cep')} data-testid="cep" type="text" label={'CEP:'} placeholder="Digite aqui" disabled={false} requiredField={true} hasError={errors.cep?.message} />
						<Select
							{...register('estado', {
								setValueAs: v => parseInt(v)
							})}
							data-testid="estado"
							label={'Estado:'}
							disabled={false}
							requiredField={true}
							options={options.estado}
							hasError={errors.estado?.message}
						/>
						<Input {...register('cidade')} data-testid="cidade" type="text" label={'Cidade:'} placeholder="Digite aqui" disabled={false} requiredField={true} hasError={errors.cidade?.message} />
					</S.ContainerFields>
					<S.ContainerFields>
						<Input {...register('endereco')} data-testid="endereco" type="text" label={'Endereço:'} placeholder="Digite aqui" disabled={false} requiredField={true} hasError={errors.endereco?.message} />
						<Input
							{...register('numEndereco', {
								setValueAs: v => parseInt(v)
							})}
							data-testid="numEndereco"
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
