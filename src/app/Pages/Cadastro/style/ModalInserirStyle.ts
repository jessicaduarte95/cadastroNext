import styled from 'styled-components';

export const ContainerTitle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 32px;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0px 32px;
	gap: 20px;
`;

export const ContainerAlert = styled.div`
	background-color: #fffad6;
	padding: 10px;
	gap: 10px;
`;

export const Alert = styled.span`
	color: #ccb400;
	font-size: 14px;
	font-weight: 400px;
	line-height: 20px;
`;

export const Lista = styled.li`
	color: #ccb400;
`;

export const ContainerFields = styled.div`
	display: flex;
	gap: 10px;
`;

export const ContainerButtons = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 32px;
    gap: 10px;
`;
