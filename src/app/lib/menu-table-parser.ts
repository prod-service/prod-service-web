interface IRawTableData {
    [key: string]: string
};

interface IProduct {
    [productKey: string]: string
};

interface IMenuObj {
    [dayKey: string]: {
        [mealKey: string]: {
            [dishKey: string]: IProduct
        }
    }
};

interface IGetMenuParams {
    inputTable: IRawTableData[] | unknown[],
    productList: IProduct | Object
};

const getValueByKey = (key: string, someObj: Object): any => {
    return someObj[key as keyof typeof someObj];
};

const getIngredientsValues = (productList: IProduct | Object, dishObj: IProduct): IProduct => {

    return Object.keys(dishObj).reduce((prev, curr) => {
        const name = getValueByKey(curr, productList);
        if (!name) return prev;

        return {
            ...prev,
            [name]: getValueByKey(curr, dishObj)
        }
    }, {})
};

export const getProducts = (inputTable: IRawTableData[] | unknown[]): IProduct | Object => {
    return {
        ...inputTable.slice(1,2)[0] || {},
        ...inputTable.slice(2,3)[0] || {}
    }
};

export const getMenuObject = (
    inputTable: IRawTableData[] | unknown[],
    productList: IProduct | Object
): IMenuObj | Object => {
    const dayKey = '__EMPTY';
    const mealKey = '__EMPTY_1';
    const dishKey = '__EMPTY_2';
    let result: IMenuObj = {};
    let currentDay = '';
    let currentMeal = '';

    inputTable.forEach((rowTable: any, idx) => {
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

    console.log(result);

    return result;
}
