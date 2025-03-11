import { useEffect, useState } from "react";
import DishCalc from "./DishCalc";
import { IProduct } from "@/app/lib/menu-table-parser";
import { getValueByKey } from "@/app/helpers";

interface MealFormProps {
    formObjects: {
        [dishKey: string]: IProduct
    }
};

const MealForm: React.FC<MealFormProps> = ({ formObjects }) => {
    const [mealList, setMealList] = useState<Array<string>>([]);

    useEffect(() => {
        if (formObjects) setMealList(Object.keys(formObjects));
    }, [formObjects]);
    
    return (
        <ul className="md:grid md:gap-2 md:grid-cols-3 lg:grid-cols-3">
            { mealList.length > 0 && mealList.map((meal, idx) => {
                return <li key={idx}>
                    <strong>{meal}</strong>
                    <DishCalc dishListObj={getValueByKey(meal, formObjects)} />
                </li>
            }) }
        </ul>
    );
};

export default MealForm;