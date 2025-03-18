'use client'

import { getMenuObject, getProducts, IMenuObj } from "../../lib/menu-table-parser";
import FileUpload from "../FileUpload";
import { read, utils } from "xlsx-js-style";

interface MenuUploadProps {
    onMenuUpload: (file: IMenuObj | object) => void;
    onMenuRemove: () => void;
}

const MenuUpload: React.FC<MenuUploadProps> = ({ onMenuUpload, onMenuRemove }) => {
    const handlerUploading = (file: File) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            const workbook = read(event.target?.result);
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const sheetData = utils.sheet_to_json(sheet);
    
            const productsList = getProducts(sheetData)
            const menu = getMenuObject(sheetData.slice(3), productsList);

            onMenuUpload(menu);
        }

        if (file instanceof Blob) reader.readAsArrayBuffer(file);
    }

    const handlerRemoveFile = () => {
        onMenuRemove();
    }

    return(
        <div className="menu-upload">
            <FileUpload title="Загрузити розкладку" onFileUpload={handlerUploading} onRemoveFile={handlerRemoveFile} />
        </div>
    );
};

export default MenuUpload;