import { ChangeEvent, useEffect, useState } from "react";
import DishCalc from "./DishCalc";
import { IMealObj } from "@/app/lib/menuTableParser";
import { getValueByKey } from "@/app/helpers";
import { IInvoiceData, parseIntoInvoice } from "@/app/lib/invoiceParser";
import { exportToExcel } from "@/app/lib/exportInvoiceToExcel";
import localMealObject from "@/app/lib/localMealObject";
import { useInputNumber } from "@/app/hooks";
import MenuInputControl from "./MenuInputControls";

interface MealFormProps {
    originFormObj: IMealObj,
    dayTitle?: string
};

const MealForm: React.FC<MealFormProps> = ({ originFormObj, dayTitle = '' }) => {
    const [mealList, setMealList] = useState<Array<string>>([]);
    const [prefix, setPrefix] = useState('');
    const { value: countInput, onChange: setCountInput } = useInputNumber(1)
    const { getLocalMealObj, resetLocalMeal, setDishesByMealList, setDishByMealName } = localMealObject();
    const prefixHandler = (e: ChangeEvent<HTMLInputElement>) => setPrefix(e.target?.value.trim() || '');

    const fileHandler = () => {
        const invoice: IInvoiceData = parseIntoInvoice({
            dayTitle,
            numberPeople: countInput,
            inputData: getLocalMealObj(),
            singleData: originFormObj
        });

        exportToExcel(invoice, `${prefix} Розкладка-накладна ${dayTitle}.xlsx`.trim());    
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
            <form action="#" onSubmit={(e) => e.preventDefault()} className="text-center">
                <label className="inline-block mb-2">Префікс <input type="text" value={prefix} onChange={prefixHandler} className="h-9 border-2 border-blue-500 p-1" /></label>
                <MenuInputControl inputValue={countInput} downloadHandler={fileHandler} inputOnChange={setCountInput} />
            </form>
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
        </div>
    );
};

export default MealForm;