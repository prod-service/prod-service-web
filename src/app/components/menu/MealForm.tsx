import { ChangeEvent, useEffect, useState } from "react";
import DishCalc from "./DishCalc";
import { IDishObj, IMealObj } from "@/app/lib/menu-table-parser";
import { getValueByKey } from "@/app/helpers";
import { IInvoiceData, parseIntoInvoice } from "@/app/lib/invoice-parser";
import { exportToExcel } from "@/app/lib/exportToExcel";

interface MealFormProps {
    originFormObj: IMealObj,
    dayTitle?: string
};

const MealForm: React.FC<MealFormProps> = ({ originFormObj, dayTitle = '' }) => {
    const [mealList, setMealList] = useState<Array<string>>([]);
    const [countInput, setCountInput] = useState<number | string>(1);
    let calcObject: IMealObj = {};

    const calcHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (Number(value) < 1 || isNaN(Number(value))) {setCountInput(''); return e.preventDefault();}
        setCountInput(Number(value));
    };
    
    const setDishesInit = (mealList: string[]): void => {
        mealList.forEach((meal) => dishHandler(getValueByKey(meal, originFormObj), meal));
    };

    const dishHandler = (calcObj: IDishObj, mealName: string): void => {calcObject = { ...calcObject, [mealName]: calcObj }};

    const fileHandler = () => {
        const res: IInvoiceData = parseIntoInvoice({
            dayTitle,
            numberPeople: countInput,
            inputData: calcObject,
            singleData: originFormObj
        });

        exportToExcel(res, 'Розкладка-накладна '+dayTitle+'.xlsx');    
    };

    useEffect(() => {
        const meals = Object.keys(originFormObj);
        if (meals.length) { setMealList(meals); setDishesInit(meals); }
    }, [originFormObj]);

    if (!mealList.length) return (<div>No list</div>);

    return (
        <div>
            <h2 className="text-center text-lg font-bold">{ dayTitle }</h2>
            <div className="text-center">
                <label>Кількість о/с: <input type="text" value={countInput} onChange={calcHandler} className="border-2 rounded p-1" /></label>
            </div>
            <ul className="md:grid md:gap-2 md:grid-cols-3 lg:grid-cols-3">
                { mealList.map((meal, idx) => {
                    return <li key={idx}>
                        <p className="capitalize border-b-2">{meal}</p>
                        <DishCalc
                            dishListObj={getValueByKey(meal, originFormObj)}
                            countInput={countInput}
                            onDishChange={ (calcObj) => dishHandler(calcObj, meal)}
                        />
                    </li>
                }) }
            </ul>
            <button className="bg-green-500 text-white p-2 rounded" onClick={fileHandler}>Get file</button>
        </div>
    );
};

export default MealForm;