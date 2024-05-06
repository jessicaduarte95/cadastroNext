import '@testing-library/jest-dom';
import { ModalInserir } from './ModalInserir';
import { render, screen, logRoles, waitFor, fireEvent } from '@testing-library/react';

describe('Formulário de cadastro', () => {
	it('should render correctly', () => {
		const handleCloseModal = jest.fn();

		render(<ModalInserir isOpen={true} handleCloseModal={handleCloseModal} />);

		const nome = screen.getByTestId('nome');
		const profissional = screen.getByTestId('profissional');
		const banco = screen.getByTestId('banco');
		const tipoConta = screen.getByTestId('tipoConta');
		const agencia = screen.getByTestId('agencia');
		const conta = screen.getByTestId('conta');
		const tipoPessoa = screen.getByTestId('tipoPessoa');
		const cpf = screen.getByTestId('cpf');
		const telefone = screen.getByTestId('telefone');
		const cep = screen.getByTestId('cep');
		const estado = screen.getByTestId('estado');
		const cidade = screen.getByTestId('cidade');
		const endereco = screen.getByTestId('endereco');
		const numEndereco = screen.getByTestId('numEndereco');
		
		expect(nome).toBeInTheDocument();
		expect(profissional).toBeInTheDocument();
		expect(banco).toBeInTheDocument();
		expect(tipoConta).toBeInTheDocument();
		expect(agencia).toBeInTheDocument();
		expect(conta).toBeInTheDocument();
		expect(tipoPessoa).toBeInTheDocument();
		expect(cpf).toBeInTheDocument();
		expect(telefone).toBeInTheDocument();
		expect(cep).toBeInTheDocument();
		expect(estado).toBeInTheDocument();
		expect(cidade).toBeInTheDocument();
		expect(endereco).toBeInTheDocument();
		expect(numEndereco).toBeInTheDocument();


		const buttonSubmit = screen.getByRole('button', { name: /Concluir/i });
		const buttonCancel = screen.getByRole('button', { name: /Cancelar/i });
		
		expect(buttonSubmit).toBeVisible();
		expect(buttonCancel).toBeVisible();
	});
});
