import { useEffect, useState } from "react";
import DishCalc from "./DishCalc";
import { IMealObj } from "@/app/lib/menuTableParser";
import { getValueByKey } from "@/app/helpers";
import { IInvoiceData, parseIntoInvoice } from "@/app/lib/invoiceParser";
import { exportToExcel } from "@/app/lib/exportToExcel";
import localMealObject from "@/app/lib/localMealJbject";
import { useInputNumber } from "@/app/hooks";

interface MealFormProps {
    originFormObj: IMealObj,
    dayTitle?: string
};

const MealForm: React.FC<MealFormProps> = ({ originFormObj, dayTitle = '' }) => {
    const [mealList, setMealList] = useState<Array<string>>([]);
    const { value: countInput, onChange: setCountInput } = useInputNumber(1)
    const { getLocalMealObj, resetLocalMeal, setDishesByMealList, setDishByMealName } = localMealObject();

    const fileHandler = () => {
        const invoice: IInvoiceData = parseIntoInvoice({
            dayTitle,
            numberPeople: countInput,
            inputData: getLocalMealObj(),
            singleData: originFormObj
        });

        exportToExcel(invoice, `Розкладка-накладна ${dayTitle}.xlsx`);    
    };

    useEffect(() => {
        const meals = Object.keys(originFormObj);
        if (meals.length) { setMealList(meals); setDishesByMealList(originFormObj); }

        return () => resetLocalMeal();
    }, [originFormObj]);

    if (!mealList.length) return (<div>No list</div>);

    return (
        <div className="text-black">
            <h2 className="text-center text-lg font-bold">{ dayTitle }</h2>
            <div className="text-center">
                <label>Кількість о/с: <input type="text" value={countInput} onChange={setCountInput} className="border-2 border-blue-500 p-1" /></label>
            </div>
            <ul className="md:grid md:gap-2 md:grid-cols-3 lg:grid-cols-3 mb-3">
                { mealList.map((meal, idx) => {
                    return <li key={idx}>
                        <h3 className="text-lg capitalize border-b-2 border-blue-200">{meal}</h3>
                        <DishCalc
                            dishListObj={getValueByKey(meal, originFormObj)}
                            countInput={countInput}
                            onDishChange={ (calcObj) => setDishByMealName(calcObj, meal)}
                        />
                    </li>
                }) }
            </ul>
            <button className="bg-green-500 text-white p-2 w-full md:w-auto" onClick={fileHandler}>Зберегти файл Excel</button>
        </div>
    );
};

export default MealForm;