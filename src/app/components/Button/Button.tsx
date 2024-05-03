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
	onClick: MouseEventHandler<HTMLButtonElement>;
};

export const CancelButton = (props: CancelButtonProps) => {
	const { children, onClick } = props;

	return <S.CancelButton onClick={onClick}>{children}</S.CancelButton>;
};

type NextButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: string;
};

export const NextButton = forwardRef<HTMLButtonElement, NextButtonProps>((props, ref) => {
	const { type, children, ...rest } = props;

	return (
		<S.NextButton type={type} {...rest}>
			{children}
		</S.NextButton>
	);
});

type CloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	onClick: MouseEventHandler<HTMLButtonElement>;
};

export const CloseButton = (props: CloseButtonProps) => {
	const { onClick } = props;

	return (
		<S.CloseButton onClick={onClick}>
			<S.CloseTextButton>x</S.CloseTextButton>
		</S.CloseButton>
	);
};
