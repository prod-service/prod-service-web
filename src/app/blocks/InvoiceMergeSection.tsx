import { read, utils } from "xlsx-js-style";
import MultipleUploadFileList from "../components/MultipleFileList/MultipleUploadFileList";
import { ICustomFile } from "../components/MultipleFileUpload";
import { useExportExcel, useSheetMerge } from "../hooks";
import { IProductItem } from "../hooks/useSheetMerge";
import { ChangeEvent, useState } from "react";

const InvoiceMergeSection = () => {
    const [fileName, setFileName] = useState('');
    const { createExcelFile, downloadExcelFile } = useExportExcel();

    const fileNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFileName(value);
    };

    const onSendFilesHandler = async (files: ICustomFile[]) => {
        if (!files.length) return;

        const promisesArr = files.map(({ file }) => (file.arrayBuffer()));

        const bufferArray = await Promise.all(promisesArr);

        const sheetList = bufferArray.map((bufferData) => {
            const workbook = read(bufferData);
            const sheetName = workbook.SheetNames[0];
            return utils.sheet_to_json(workbook.Sheets[sheetName]);
        });

        const productList: IProductItem[] = useSheetMerge(sheetList);

        downloadExcelFile(createExcelFile(productList), fileName);
    };

    return (
        <section className="p-4">
            <h2 className="text-2xl text-center mb-4">Сума розкладок-накладнах</h2>
            <div className="text-center">
                <p className="mb-3"><label htmlFor="fileName">Введіть назву файлу:</label></p>
                <input id="fileName" type="text" value={fileName} onChange={fileNameHandler} className="border-2 border-blue-500 p-1" />
            </div>
            <MultipleUploadFileList sendButtonTxt="Об'єднати" onSendFiles={onSendFilesHandler} />
        </section>
    );
};

export default InvoiceMergeSection;