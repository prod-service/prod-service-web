import { IInitValue } from "@/app/hooks/useInputNumber";
import { ChangeEvent } from "react";

interface MenuInputControlProps {
    inputValue?: IInitValue,
    downloadHandler: (countInput: IInitValue, inputPrefix?: string) => void,
    inputOnChange: (e: ChangeEvent<HTMLInputElement>) => void,
};

const MenuInputControl: React.FC<MenuInputControlProps> = ({ inputValue = 1, downloadHandler, inputOnChange }) => {
    return (
        <div>
            <div className="text-center mb-4">
                <label className="inline-block md:mr-2 md:mb-0 mb-2">Кількість о/с: <input type="text" value={inputValue} onChange={inputOnChange} className="h-9 border-2 border-blue-500 p-1" /></label>
                <button className="h-9 bg-green-500 text-white px-2 w-full md:w-auto" onClick={() => downloadHandler(inputValue)}>Зберегти файл Excel</button>
            </div>
        </div>
    );
}

export default MenuInputControl;
