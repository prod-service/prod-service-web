import { ChangeEvent, useEffect, useState } from "react";
import DishCalc from "./DishCalc";
import { IDishObj, IMealObj, IMenuObj, IProduct } from "@/app/lib/menu-table-parser";
import { getValueByKey } from "@/app/helpers";
import { calculateTotalProducts, ICalcObj } from "@/app/lib/dish-calculation";

interface MealFormProps {
    originFormObj: {
        [dishKey: string]: IProduct
    }
};

const MealForm: React.FC<MealFormProps> = ({ originFormObj }) => {
    const [mealList, setMealList] = useState<Array<string>>([]);
    let calcObject: IMealObj = {};
    
    const dishHandler = (calcObj: IDishObj, mealName: string): void => { // ?
        calcObject = { ...calcObject, [mealName]: calcObj };
    };

    // const setTotalCalc = (totalProducts: IProduct): IMealObj => ({ ...calcObject, 'total': totalProducts })

    const setDishesInit = (mealList: string[]): void => {
        mealList.forEach((meal) => dishHandler(getValueByKey(meal, originFormObj), meal));
    }

    const fileHandler = () => {
        const result = calculateTotalProducts(calcObject)

        console.log(result);
    }

    useEffect(() => {
        const meals = Object.keys(originFormObj);
        if (meals.length) { setMealList(meals); setDishesInit(meals); }
    }, [originFormObj]);

    if (!mealList.length) return (<div>No list</div>);

    return (
        <div>
            <ul className="md:grid md:gap-2 md:grid-cols-3 lg:grid-cols-3">
                { mealList.map((meal, idx) => {
                    return <li key={idx}>
                        <strong>{meal}</strong>
                        <DishCalc
                            dishListObj={getValueByKey(meal, originFormObj)}
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