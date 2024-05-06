import '@testing-library/jest-dom';
import { ModalInserir } from './ModalInserir';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

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

	it('should type into fields and submit form', async () => {
		const handleCloseModal = jest.fn();

		render(<ModalInserir isOpen={true} handleCloseModal={handleCloseModal} />);

		// Input Fields
		const mockAgencia: number = 1;
		const mockConta: number = 17788998999;
		const mockCPF: string = '050.666.111-00';
		const mockTelefone: string = '(61) 984445566';
		const mockName: string = 'Teste Nome';
		const mockCEP: string = '77099999';
		const mockCidade: string = 'Distrito Federal';
		const mockEndereco: string = 'Teste do endereço';
		const mockNumEndereco: number = 1;

		const agencia = screen.getByTestId('agencia');
		const conta = screen.getByTestId('conta');
		const cpf = screen.getByTestId('cpf');
		const telefone = screen.getByTestId('telefone');
		const nome = screen.getByTestId('nome');
		const cep = screen.getByTestId('cep');
		const cidade = screen.getByTestId('cidade');
		const endereco = screen.getByTestId('endereco');
		const numEndereco = screen.getByTestId('numEndereco');

		const buttonSubmit = screen.getByRole('button', { name: /Concluir/i });

		act(() => {
			fireEvent.change(agencia, { target: { value: mockAgencia } });
			fireEvent.change(conta, { target: { value: mockConta } });
			fireEvent.change(cpf, { target: { value: mockCPF } });
			fireEvent.change(telefone, { target: { value: mockTelefone } });
			fireEvent.change(nome, { target: { value: mockName } });
			fireEvent.change(cep, { target: { value: mockCEP } });
			fireEvent.change(cidade, { target: { value: mockCidade } });
			fireEvent.change(endereco, { target: { value: mockEndereco } });
			fireEvent.change(numEndereco, { target: { value: mockNumEndereco } });
			fireEvent.click(buttonSubmit);
		});

		expect(agencia).toHaveValue(mockAgencia);
		expect(conta).toHaveValue(mockConta);
		expect(cpf).toHaveValue(mockCPF);
		expect(telefone).toHaveValue(mockTelefone);
		expect(nome).toHaveValue(mockName);
		expect(cep).toHaveValue(mockCEP);
		expect(cidade).toHaveValue(mockCidade);
		expect(endereco).toHaveValue(mockEndereco);
		expect(numEndereco).toHaveValue(mockNumEndereco);
	});
});
