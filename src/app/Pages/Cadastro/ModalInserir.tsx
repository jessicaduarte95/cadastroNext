'use client';

import { Modal } from '../../components/Modal/Modal';
import { Title, SubTitle } from '../../components/Text/Text';
import * as S from './style/ModalInserirStyle';
import { useForm } from 'react-hook-form';
import { z, ZodError } from 'zod';
import { Select } from '../../components/Select/Select';
import { Input } from '../../components/Input/Input';

type ModalInserirProps = {
	isOpen: boolean;
};

const schema = z.object({
	profissional: z.string(),
	banco: z.string(),
	tipoConta: z.string(),
	tipoPessoa: z.string(),
	estado: z.string()
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
		reValidateMode: 'onChange'
		// resolver: zodResolver(schema)
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
					<Select {...register('profissional')} label={'Profissional:'} disabled={true}></Select>
					<S.ContainerFields>
						<Select {...register('banco')} label={'Banco:'} disabled={false}></Select>
						<Select {...register('tipoConta')} label={'Tipo de conta:'} disabled={false}></Select>
					</S.ContainerFields>
					<S.ContainerFields>
						<Input label={'Agência:'} placeholder="Digite aqui" disabled={false} />
						<Input label={'Conta com dígito:'} placeholder="Digite aqui" disabled={false} />
					</S.ContainerFields>
					<S.ContainerFields>
						<Select {...register('tipoPessoa')} label={'Tipo de pessoa:'} disabled={false}></Select>
						<Input label={'CPF:'} placeholder="Digite aqui" disabled={false} />
						<Input label={'Telefone:'} placeholder="Digite aqui" disabled={false} />
					</S.ContainerFields>
					<Input label={'Nome completo:'} placeholder="Digite aqui" disabled={false} />
					<S.ContainerFields>
						<Input label={'CEP:'} placeholder="Digite aqui" disabled={false} />
						<Select {...register('estado')} label={'Estado:'} disabled={false}></Select>
						<Input label={'Cidade:'} placeholder="Digite aqui" disabled={false} />
					</S.ContainerFields>
					<S.ContainerFields>
						<Input label={'Endereço:'} placeholder="Digite aqui" disabled={false} />
						<Input label={'Número:'} placeholder="Digite aqui" disabled={false} />
					</S.ContainerFields>
				</S.Container>
			</form>
		</Modal>
	);
};
