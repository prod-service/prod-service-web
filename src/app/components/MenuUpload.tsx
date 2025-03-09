'use client'

import { getMenuObject, getProducts } from "../lib/menu-table-parser";
import FileUpload from "./FileUpload";
import { read, utils } from "xlsx";

export default function MenuUpload() {
    const handlerUploading = (file: File) => {
        console.log(file);
        const reader = new FileReader();

        reader.onload = (event) => {
            const workbook = read(event.target?.result);
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const sheetData = utils.sheet_to_json(sheet);
    
            const productsList = getProducts(sheetData)
            const menu = getMenuObject(sheetData.slice(3), productsList);
        }

        reader.readAsArrayBuffer(file);
        
    }

    return(
        <div className="menu-upload">
            <FileUpload onFileUpload={handlerUploading} />
        </div>
    );
}