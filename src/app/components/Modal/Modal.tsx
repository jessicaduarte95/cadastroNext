import * as S from './style';

type ModalProps = {
	children: any;
	isOpen: boolean;
	width: string;
};

export const Modal = (props: ModalProps) => {
	const { children, isOpen, width } = props;

	return (
		<>
			{isOpen && (
				<S.BackgroundModal>
					<S.Modal width={width}>{children}</S.Modal>
				</S.BackgroundModal>
			)}
		</>
	);
};
