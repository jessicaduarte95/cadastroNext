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

type CancelButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: string;
};

export const CancelButton = (props: CancelButtonProps) => {
	const { children } = props;

	return <S.CancelButton>{children}</S.CancelButton>;
};

type NextButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: string;
};

export const NextButton = forwardRef<HTMLButtonElement, NextButtonProps>((props, ref) => {
	const { children, ...rest } = props;

	return <S.NextButton {...rest}>{children}</S.NextButton>;
});
