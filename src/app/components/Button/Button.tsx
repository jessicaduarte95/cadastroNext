import React, { MouseEventHandler } from 'react';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import * as S from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
};

export const ButtonAdicionar = (props: ButtonProps) => {
	const { children, onClick } = props;

	return (
		<S.ButtonAdicionar onClick={onClick}>
			<strong>+ </strong>
			{children}
		</S.ButtonAdicionar>
	);
};
