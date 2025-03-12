import { getValueByKey } from "@/app/helpers";
import { IProduct } from "@/app/lib/menu-table-parser";
import { useState, useEffect, ChangeEvent } from "react";
import ProductListValues from "./ProductListValues";

interface ICalcObj {
    [dishName: string]: IProduct
};

interface DishCalcProps {
    dishListObj: {
        [dishName: string]: IProduct
    }
}

const DishCalc: React.FC<DishCalcProps> = ({ dishListObj }) => {
    const [dishList, setDishList] = useState<Array<string>>([]);
    const [calcObject, setCalcObjectList] = useState<ICalcObj>({});
    const [countInput, setCountInput] = useState<number | string>('');

    const calcHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        if (Number(value) < 1 || isNaN(Number(value))) {setCountInput(''); return e.preventDefault();}

        setCountInput(Number(value));
    };

    useEffect(() => {
        if (dishListObj) {
            setDishList(Object.keys(dishListObj));
            setCalcObjectList(Object.assign(calcObject, dishListObj));
        }
    }, [dishListObj]);

    useEffect(() => {
        console.log(calcObject, dishListObj);
        
        let localCalcObj: ICalcObj = Object.assign({}, dishListObj);

        const parseToNum = (str: string | number): number => {
            if (typeof str === 'number') return str;
            return Number(str.replaceAll(',', '.'));
        };


        if (parseToNum(countInput) > 0) {Object.keys(localCalcObj).forEach((dish) => {
            console.log(dish);

            Object.keys(getValueByKey(dish, localCalcObj)).forEach((prod) => {
                const value = getValueByKey(prod, localCalcObj[dish]);
                console.log(typeof value);
                
                const calcValue = parseToNum(value) * parseToNum(countInput);

                localCalcObj = {
                    ...localCalcObj,
                    [dish]: {
                        ...localCalcObj[dish],
                        [prod]: calcValue / 1000 + ' кг'
                    }
                };
            });
        });}

        // console.log(localCalcObj);
        setCalcObjectList((prevData) => {
            return {
                ...prevData,
                ...localCalcObj
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