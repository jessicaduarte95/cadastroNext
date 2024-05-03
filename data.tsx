interface Option {
	value: number;
	label: string;
}

export const options: { [key: string]: Option[] } = {
	profissional: [
		{
			value: 1,
			label: 'João Da Silva'
		},
		{
			value: 2,
			label: 'Joaquina Oliveira'
		}
	],

	banco: [
		{
			value: 1,
			label: 'Banco do Brasil'
		},
		{
			value: 2,
			label: 'Itaú'
		},
		{
			value: 2,
			label: 'Santander'
		}
	],

	tipoConta: [
		{
			value: 1,
			label: 'Crédito'
		},
		{
			value: 2,
			label: 'Débito'
		}
	],

	tipoPessoa: [
		{
			value: 1,
			label: 'Pessoa Física'
		},
		{
			value: 2,
			label: 'Pessoa Jurídica'
		}
	],

	estado: [
		{
			value: 1,
			label: 'Distrito Federal'
		},
		{
			value: 2,
			label: 'São Paulo'
		}
	]
};
