import { productCol, productValueCol } from "../consts";

export interface IProductItem {
    name: string,
    value: number
};

export const useSheetMerge = (sheetList: unknown[][]): IProductItem[] => {
    const productMap = new Map<string, IProductItem>();
    
    const findProduct = (tableObj: any): IProductItem | undefined => {
        const prodName = tableObj[productCol];
        const prodValue = tableObj[productValueCol];
        if (typeof prodValue === 'number' && typeof prodName === 'string') {
            return { name: prodName, value: prodValue };
        } else return undefined;
    };

    const getProductList = (list: unknown[]) => {
        list.forEach((current: any) => {
            const product = findProduct(current);
            
            if (!product) return;

            const prevValue = productMap.get(product.name)?.value || 0;

            if (!productMap.has(product.name)) return productMap.set(product.name, product);
            
            productMap.set(product.name, { name: product.name, value: product.value + prevValue});
        })
    };

    sheetList.forEach(getProductList);

    return Array.from(productMap.values());
};