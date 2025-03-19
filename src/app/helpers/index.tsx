import { dateRegex } from "../consts";

export const getValueByKey = (key: string, someObj: object): any => {
    if (!someObj) return null;
    
    return someObj[key as keyof typeof someObj];
};

export const filterStringsArr = (filterNames: Array<string>, unFilteredarr: Array<string>): Array<string> => {
    return unFilteredarr.filter(unFilt => filterNames.find(mealN => unFilt.trim().toLocaleLowerCase() === mealN));
};

export const parseToNum = (str: string | number): number => {
    if (typeof str === 'number') return str;
    return Number(str.replaceAll(',', '.'));
};

export const numRound = (num: number, decimal: number = 4): number => {
    return parseFloat(num.toFixed(decimal));
};

export const findDateStr = (str: string): string => {
    const match: RegExpMatchArray | null = str.match(dateRegex);
    if (match) return match[0];
    return '';
};