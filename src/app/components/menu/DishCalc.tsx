import { getValueByKey, parseToNum } from "@/app/helpers";
import { IDishObj } from "@/app/lib/menuTableParser";
import { useState, useEffect } from "react";
import ProductListValues from "./ProductListValues";
import { calculateDishObect } from "@/app/lib/dishCalculation";

interface DishCalcProps {
    dishListObj: IDishObj,
    countInput: number | string,
    onDishChange: (calcObj: IDishObj) => void
}

const DishCalc: React.FC<DishCalcProps> = ({ dishListObj, countInput, onDishChange }) => {
    const [dishList, setDishList] = useState<Array<string>>([]);
    const [calcObject, setCalcObjectList] = useState<IDishObj>({});
    const updateCalcObj = (prevData: IDishObj): IDishObj => ({
        ...prevData,
        ...calculateDishObect(parseToNum(countInput), dishListObj)
    });

    useEffect(() => {
        if (dishListObj) setDishList(Object.keys(dishListObj));
    }, [dishListObj]);

    useEffect(() => {
        if (parseToNum(countInput) > 0) setCalcObjectList(updateCalcObj);
    }, [countInput]);

    useEffect(() => {
        if (parseToNum(countInput) > 0) onDishChange(calcObject);
    }, [calcObject]);

    if (!dishList.length) return <div>No list</div>;
    
    return (
        <div>
            <ul>
                { dishList.map((dish, idx) => {
                    return (
                        <li key={idx}>
                            <strong>{dish}</strong>
                            <ProductListValues productListObj={getValueByKey(dish, calcObject)} />
                        </li>
                    );
                }) }
            </ul>
        </div>
    );
};

export default DishCalc;