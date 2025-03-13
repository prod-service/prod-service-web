import { getValueByKey, parseToNum } from "@/app/helpers";
import { IProduct } from "@/app/lib/menu-table-parser";
import { useState, useEffect, ChangeEvent } from "react";
import ProductListValues from "./ProductListValues";
import { calculateDishObect, ICalcObj } from "@/app/lib/dish-calculation";

interface DishCalcProps {
    dishListObj: {
        [dishName: string]: IProduct
    }
}

const DishCalc: React.FC<DishCalcProps> = ({ dishListObj }) => {
    const [dishList, setDishList] = useState<Array<string>>([]);
    const [calcObject, setCalcObjectList] = useState<ICalcObj>({});
    const [countInput, setCountInput] = useState<number | string>(1);

    const calcHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        if (Number(value) < 1 || isNaN(Number(value))) {setCountInput(''); return e.preventDefault();}

        setCountInput(Number(value));
    };

    useEffect(() => {
        if (dishListObj) {
            setDishList(Object.keys(dishListObj));
            setCalcObjectList((prevData) => {
                return {
                    ...prevData,
                    ...calculateDishObect(parseToNum(countInput), dishListObj)
                }
            });
        }
    }, [dishListObj]);

    useEffect(() => {
        setCalcObjectList((prevData) => {
            return {
                ...prevData,
                ...calculateDishObect(parseToNum(countInput), dishListObj)
            }
        });

    }, [countInput]);

    if (!dishList.length) return <div>No list</div>;
    
    return (
        <div>
            <input
                type="text"
                value={countInput}
                onChange={calcHandler}
                className="border-2 rounded"
            />
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