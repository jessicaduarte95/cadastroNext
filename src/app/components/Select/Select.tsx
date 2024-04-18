import { forwardRef, SelectHTMLAttributes } from 'react';
import * as S from './style';

type SelectProps = SelectHTMLAttributes<HTMLInputElement> & {
    label: string,
    disabled: boolean
}

export const Select = forwardRef<HTMLInputElement, SelectProps>((props, ref) => {

    const { label = '', disabled = false, name = ''} = props;

    return(
        <S.Container>
            <S.Label disabled={disabled}>{label}</S.Label>
            <S.Select name={name} disabled={disabled}>
                <S.Options value='' disabled selected>Selecione</S.Options>
            </S.Select>
        </S.Container>
    )
});