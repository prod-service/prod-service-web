import { countByItems, mealDishesSymbols, mealNames } from "../consts";
import { getValueByKey } from "../helpers";

interface IRawTableData {
    [key: string]: string
};

export interface IProduct {
    [productKey: string]: string | number
};

export interface IDishObj {
    [dishKey: string]: IProduct
};

export type IMealObj = {
    [mealKey: string]: IDishObj,
    [mealKey: symbol]: IProduct,
};

export interface IMenuObj {
    [dayKey: string]: IMealObj
};

export const getIngredientsValues = (productList: IProduct | object, dishObj: IProduct): IProduct => {
    return Object.keys(dishObj).reduce((prev, curr) => {
        const name = getValueByKey(curr, productList);
        if (!name) return prev;

        return {
            ...prev,
            [name]: getValueByKey(curr, dishObj)
        }
    }, {})
};

const getMealName = (mealName: string): string => {
    const defaultValue = '';
    if (typeof mealName !== 'string') return defaultValue;
    return mealNames.find(n => n === mealName.toLocaleLowerCase().trim()) || defaultValue;
};

export const getProductByCountItem = (product: string): string => {
    const defaultValue = '';
    if (typeof product !== 'string') return defaultValue;
    return countByItems.find(n => n === product.toLocaleLowerCase().trim()) || defaultValue;
};

export const getProducts = (inputTable: IRawTableData[] | unknown[]): IProduct | object => {
    return {
        ...inputTable.slice(1,2)[0] || {},
        ...inputTable.slice(2,3)[0] || {}
    }
};

export const getMenuObject = (
    inputTable: IRawTableData[] | unknown[],
    productList: IProduct | object
): IMenuObj | object => {
    const dayKey = '__EMPTY';
    const mealKey = '__EMPTY_1';
    const dishKey = '__EMPTY_2';
    let result: IMenuObj = {};
    let currentDay = '';
    let currentMeal = '';

    inputTable.forEach((rowTable: any) => {
        currentDay = rowTable[dayKey] || currentDay;
        currentMeal = getMealName(rowTable[mealKey]) || currentMeal;

        if (rowTable[dayKey]) {
            result = {
                ...result,
                [currentDay]: {}
            }
        }

        if (rowTable[mealKey] && getMealName(rowTable[mealKey])) {
            result[currentDay] = {
                ...result[currentDay],
                [getMealName(rowTable[mealKey])]: {}
            }
        }
        
        if (rowTable[dishKey]) {
            result[currentDay][currentMeal] = {
                ...result[currentDay][currentMeal],
                [rowTable[dishKey].trim()]: {
                    ...getIngredientsValues(productList, rowTable)
                    // TODO: лавровий лист, оцет, перець, гірч.порошок parsed to the first dish of breakfast: should change
                }
            }
        }
    });

    return result;
}
