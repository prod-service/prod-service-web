import { ChangeEvent, useEffect, useState } from "react";
import DishCalc from "./DishCalc";
import { IProduct } from "@/app/lib/menu-table-parser";
import { getValueByKey } from "@/app/helpers";

interface MealFormProps {
    originFormObj: {
        [dishKey: string]: IProduct
    }
};

const MealForm: React.FC<MealFormProps> = ({ originFormObj }) => {
    const [mealList, setMealList] = useState<Array<string>>([]);

    useEffect(() => {
        if (originFormObj) setMealList(Object.keys(originFormObj));
    }, [originFormObj]);

    if (!mealList.length) return (<div>No list</div>);

    return (
        <ul className="md:grid md:gap-2 md:grid-cols-3 lg:grid-cols-3">
            { mealList.map((meal, idx) => {
                return <li key={idx}>
                    <strong>{meal}</strong>
                    <DishCalc dishListObj={getValueByKey(meal, originFormObj)} />
                </li>
            }) }
        </ul>
    );
};

export default MealForm;