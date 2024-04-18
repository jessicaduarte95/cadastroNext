import { useState } from 'react';
import { ButtonAdicionar } from '../../components/Button/Button';
import { ModalInserir } from './ModalInserir';

export const Principal = () => {
	const [openModal, setOpenModal] = useState(false);
	const handleOpenModal = () => setOpenModal(true);

	return (
		<>
			<ButtonAdicionar onClick={handleOpenModal}>Inserir</ButtonAdicionar>
            <ModalInserir isOpen={openModal}/>
		</>
	);
};
