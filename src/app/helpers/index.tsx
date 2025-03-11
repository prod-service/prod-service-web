export const getValueByKey = (key: string, someObj: object): any => {
    if (!someObj) return null;
    
    return someObj[key as keyof typeof someObj];
};

export const filterStringsArr = (filterNames: Array<string>, unFilteredarr: Array<string>): Array<string> => {
    return unFilteredarr.filter(unFilt => filterNames.find(mealN => unFilt.trim().toLocaleLowerCase() === mealN));
};