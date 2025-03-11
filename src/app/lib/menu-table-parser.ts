interface IRawTableData {
    [key: string]: string
};

interface IProduct {
    [productKey: string]: string
};

export interface IMenuObj {
    [dayKey: string]: {
        [mealKey: string]: {
            [dishKey: string]: IProduct
        }
    }
};

export const getValueByKey = (key: string, someObj: object): any => {
    if (!someObj) return null;
    
    return someObj[key as keyof typeof someObj];
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
        currentMeal = rowTable[mealKey] || currentMeal;

        if (rowTable[dayKey]) {
            result = {
                ...result,
                [currentDay]: {}
            }
        }

        if (rowTable[mealKey]) {
            result[currentDay] = {
                ...result[currentDay],
                [rowTable[mealKey].trim()]: {}
            }
        }
        
        if (rowTable[dishKey]) {
            result[currentDay][currentMeal] = {
                ...result[currentDay][currentMeal],
                [rowTable[dishKey].trim()]: {
                    ...getIngredientsValues(productList, rowTable)
                }
            }
        }
    });

    return result;
}
