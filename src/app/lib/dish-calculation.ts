import { getValueByKey, numRound, parseToNum } from "../helpers";
import { getProductByCountItem, IMealObj, IProduct } from "./menu-table-parser";

export interface ICalcObj {
    [dishName: string]: IProduct
};

export const calculateTotalProducts = (originObj: IMealObj): IProduct => {
    let productsTotal: IProduct = {};

    // TODO: review later
    // Loop for each meal (сніданок, обід, вечеря)
    Object.keys(originObj).forEach((meal) => {
        // Loop for each dish (Макарони відварні та соус, Риба смажена ...)
        Object.keys(getValueByKey(meal, originObj)).forEach((dish) => {
            // Loop for each product (Олія, Оцет, Крупа гречана)
            Object.keys(getValueByKey(dish, getValueByKey(meal, originObj))).forEach((product) => {
                const value: number = parseToNum(getValueByKey(product, getValueByKey(dish, getValueByKey(meal, originObj))));
                const pervTotalValue: number = parseToNum(getValueByKey(product, productsTotal) || 0);
                const result = numRound(pervTotalValue + value);

                if (pervTotalValue) productsTotal[product] = result;
                else productsTotal = { ...productsTotal, [product]: result };
            });
        });
    });

    return productsTotal;
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
