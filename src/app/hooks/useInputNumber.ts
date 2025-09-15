import { ChangeEvent, useState } from "react";

export type IInitValue = number | string;

export const useInputNumber = (initialValue: IInitValue = 1) => {
    const [inputNumber, setInputNumber] = useState<IInitValue>(initialValue);
    
    const calcHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (Number(value) < 1 || isNaN(Number(value))) {setInputNumber(''); return e.preventDefault();}
        setInputNumber(Number(value));
    };

    const inputProps = {
        value: inputNumber,
        onChange: calcHandler
    };

    return inputProps;
};