import { getValueByKey, parseToNum } from "../helpers";
import { IProduct } from "./menu-table-parser";

export interface ICalcObj {
    [dishName: string]: IProduct
};

export const calculateDishObect = (quantity: number, originObj: ICalcObj): ICalcObj => {
    const defaultQuantity = 1;
    let localCalcObj: ICalcObj = Object.assign({}, originObj);

    if (quantity < 0) return originObj;

    Object.keys(localCalcObj).forEach((dish) => {
        Object.keys(getValueByKey(dish, localCalcObj)).forEach((prod) => {
            const value = getValueByKey(prod, localCalcObj[dish]);
            const calcValue = parseFloat((parseToNum(value) * parseToNum(quantity || defaultQuantity)).toFixed(4));

            localCalcObj = {
                ...localCalcObj,
                [dish]: {
                    ...localCalcObj[dish],
                    [prod]: calcValue / 1000 // to Kilo
                }
            };
        });
    });

    return localCalcObj;
}