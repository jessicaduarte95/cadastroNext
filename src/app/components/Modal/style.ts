import styled from 'styled-components';
import { ButtonColors } from '../../style/theme';

export const BackgroundModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1000;
`;


export const Modal = styled.div<{width: string}>`
    position: fixed;
    top: 50%;
	left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${ButtonColors.ButtonSecondaryRest};
    border-radius: 4px;
	width: ${props => props.width};
	max-height: 90vh;
	overflow-y: auto;
	scrollbar-width: thin;
	@media (max-width: 930px) {
		width: 700px
	}
	@media (max-width: 730px) {
		width: 90%;
	}
`