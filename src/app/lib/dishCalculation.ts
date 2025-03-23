import { getValueByKey, numRound, parseToNum } from "../helpers";
import { getProductByCountItem, IMealObj, IProduct } from "./menuTableParser";

export interface ICalcObj {
    [dishName: string]: IProduct
};

export const calculateTotalProducts = (originObj: IMealObj): IProduct => {
    const dishesList = Object.values(originObj).reduce((prev, meal) => {
        return { ...prev, ...meal }
    }, {});

    return Object.keys(dishesList).reduce((prev, dish) => {
        const productList = getValueByKey(dish, dishesList);

        return {
            ...prev,
            ...Object.keys(productList).reduce((prevProd, currProd) => {
                const prodValue = parseToNum(getValueByKey(currProd, productList) || 0);
                const prevValue = parseToNum(getValueByKey(currProd, prev) || 0);
                return {
                    ...prevProd,
                    [currProd]: prevValue ? prevValue + prodValue : prodValue
                }
            }, {})
        };
    }, {});
};

export const calculateDishObect = (quantity: number, originObj: ICalcObj): ICalcObj => {
    const defaultQuantity = 1;
    let localCalcObj: ICalcObj = Object.assign({}, originObj);

    if (quantity < 0) return originObj;

    Object.keys(localCalcObj).forEach((dish) => {
        Object.keys(getValueByKey(dish, localCalcObj)).forEach((prod) => {
            const countByItem = getProductByCountItem(prod);
            const value = getValueByKey(prod, localCalcObj[dish]);
            const calcValue = numRound(parseToNum(value) * parseToNum(quantity || defaultQuantity));

            localCalcObj = {
                ...localCalcObj,
                [dish]: {
                    ...localCalcObj[dish],
                    [prod]: countByItem ? calcValue : calcValue / 1000 // to Kilo
                }
            };
        });
    });

    return localCalcObj;
}
