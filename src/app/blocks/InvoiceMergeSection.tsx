import { read, utils } from "xlsx-js-style";
import MultipleUploadFileList from "../components/MultipleFileList/MultipleUploadFileList";
import { ICustomFile } from "../components/MultipleFileUpload";
import { useSheetMerge } from "../hooks";
import { IProductItem } from "../hooks/useSheetMerge";

const InvoiceMergeSection = () => {
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

        console.log(productList);
        
    };

    return (
        <section className="border border-blue-500 p-4">
            <MultipleUploadFileList sendButtonTxt="Об'єднати" onSendFiles={onSendFilesHandler} />
        </section>
    );
};

export default InvoiceMergeSection;