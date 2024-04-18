import * as S from './style';

type TitleProps = {
	children: string;
};

export const Title = (props: TitleProps) => {
	const { children } = props;

	return <S.Title>{children}</S.Title>;
};



type SubTitleProps = {
	children: string;
};

export const SubTitle = (props: SubTitleProps) => {
	const { children } = props;

	return <S.SubTitle>{children}</S.SubTitle>;
};
