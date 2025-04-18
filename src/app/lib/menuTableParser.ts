import { WorkSheet } from "xlsx-js-style";
import { countByItems, mealNames } from "../consts";
import { getNumberFromStr, getValueByKey, replaceAllNumbers } from "../helpers";

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

const getMealName = (mealName: string): string => {
    const defaultValue = '';
    if (typeof mealName !== 'string') return defaultValue;
    return mealNames.find(n => n === mealName.toLocaleLowerCase().trim()) || defaultValue;
};

const getIngredientsValues = (productList: IProduct | object, dishObj: IProduct): IProduct => {
    return Object.keys(dishObj).reduce((prev, curr) => {
        const name = getValueByKey(curr, productList);
        if (!name) return prev;

        return {
            ...prev,
            [name]: getValueByKey(curr, dishObj)
        }
    }, {})
};

export const addingFirstRowToExcelSheet = (sheet: WorkSheet): WorkSheet => {
    return Object.keys(sheet).reduce((prev, cellAddress) => {
        const cellNumber = getNumberFromStr(cellAddress);
        const cellValue = getValueByKey(cellAddress, sheet);
        const newCellAddress = cellNumber ? replaceAllNumbers(cellAddress, cellNumber+1) : cellAddress;

        return { ...prev, [newCellAddress]: cellValue };
    }, {});
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
): IMenuObj => {
    const dayKey = '__EMPTY';
    const mealKey = '__EMPTY_1';
    const dishKey = '__EMPTY_2';
    let result: IMenuObj = {};
    let currentDay: string = '';
    let currentMeal: string = '';

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
