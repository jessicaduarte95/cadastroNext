'use client';

import { Modal } from '../../components/Modal/Modal';
import { Title, SubTitle } from '../../components/Text/Text';
import * as S from './style/ModalInserirStyle';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodError } from 'zod';
import { Select } from '../../components/Select/Select';
import { Input } from '../../components/Input/Input';
import { CancelButton, NextButton } from '../../components/Button/Button';

type ModalInserirProps = {
	isOpen: boolean;
};

const schema = z.object({
	profissional: z.string(),
	banco: z.string(),
	tipoConta: z.string(),
	tipoPessoa: z.string(),
	estado: z.string(),
	agencia: z.string(),
	conta: z.string(),
	cpf: z.string(),
	telefone: z.string(),
	nome: z.string(),
	cep: z.string(),
	cidade: z.string(),
	endereco: z.string(),
	numEndereco: z.string()
});

export const ModalInserir = (props: ModalInserirProps) => {
	const { isOpen } = props;

	type FormProps = z.infer<typeof schema>;

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormProps>({
		mode: 'all',
		reValidateMode: 'onChange',
		resolver: zodResolver(schema)
	});

	const handleForm = (data: FormProps) => {
		console.log(data);
	};

	return (
		<Modal isOpen={isOpen} width={'696px'}>
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
					<Select {...register('profissional')} label={'Profissional:'} disabled={true} required={true}></Select>
					<S.ContainerFields>
						<Select {...register('banco')} label={'Banco:'} disabled={false} required={true}></Select>
						<Select {...register('tipoConta')} label={'Tipo de conta:'} disabled={false} required={true}></Select>
					</S.ContainerFields>
					<S.ContainerFields>
						<Input {...register('agencia')} label={'Agência:'} placeholder="Digite aqui" disabled={false} required={true} />
						<Input {...register('conta')} label={'Conta com dígito:'} placeholder="Digite aqui" disabled={false} required={true} />
					</S.ContainerFields>
					<S.ContainerFields>
						<Select {...register('tipoPessoa')} label={'Tipo de pessoa:'} disabled={false} required={true}></Select>
						<Input {...register('cpf')} label={'CPF:'} placeholder="Digite aqui" disabled={false} required={true} />
						<Input {...register('telefone')} label={'Telefone:'} placeholder="Digite aqui" disabled={false} required={true} />
					</S.ContainerFields>
					<Input {...register('nome')} label={'Nome completo:'} placeholder="Digite aqui" disabled={false} required={true} />
					<S.ContainerFields>
						<Input {...register('cep')} label={'CEP:'} placeholder="Digite aqui" disabled={false} required={true} />
						<Select {...register('estado')} label={'Estado:'} disabled={false} required={true}></Select>
						<Input {...register('cidade')} label={'Cidade:'} placeholder="Digite aqui" disabled={false} required={true} />
					</S.ContainerFields>
					<S.ContainerFields>
						<Input {...register('endereco')} label={'Endereço:'} placeholder="Digite aqui" disabled={false} required={true} />
						<Input {...register('numEndereco')} label={'Número:'} placeholder="Digite aqui" disabled={false} required={true} />
					</S.ContainerFields>
				</S.Container>
				<S.ContainerButtons>
					<CancelButton>Cancelar</CancelButton>
					<NextButton>Próximo</NextButton>
				</S.ContainerButtons>
			</form>
		</Modal>
	);
};
