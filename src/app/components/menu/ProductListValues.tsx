import { getValueByKey, numRound } from "@/app/helpers";
import { IProduct } from "@/app/lib/menu-table-parser";
import { useEffect, useState } from "react";

interface ProductListValuesProps {
    productListObj: IProduct
};

const ProductListValues: React.FC<ProductListValuesProps> = ({ productListObj }) => {
    const [productList, setProductList] = useState<Array<string>>([]);

    useEffect(() => {
        if (productListObj) setProductList(Object.keys(productListObj));
    }, [productListObj]);
    
    return (
        <ul>
            { productList.length > 0 && productList.map((prod, idx) => {
                return (
                    <li key={idx}>
                        { prod } - { numRound(getValueByKey(prod, productListObj)) } кг
                    </li>
                );
            }) }
        </ul>
    );
};

export default ProductListValues;