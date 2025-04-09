import MultipleUploadFileList from "../components/MultipleFileList/MultipleUploadFileList";
import { ICustomFile } from "../components/MultipleFileUpload";
import { read, utils } from "xlsx-js-style";

const InvoiceMergeSection = () => {
    const onSendFilesHandler = async (files: ICustomFile[]) => {
        if (!files.length) return;
        console.log(files);
        const promisesArr = files.map(({ file }) => (file.arrayBuffer()));

        const bufferArray = await Promise.all(promisesArr);

        const sheetList = bufferArray.map((bufferData) => {
            const workbook = read(bufferData);
            const sheetName = workbook.SheetNames[0];
            return utils.sheet_to_json(workbook.Sheets[sheetName]);
        });

        console.log(sheetList);
        

        // files[0].file.arrayBuffer().then((data) => {
        //     const workbook = read(data);
        //     const sheetName = workbook.SheetNames[0];
        //     let sheet = workbook.Sheets[sheetName];
        //     console.log(sheet);
        // });
    };

    return (
        <section className="border border-blue-500 p-4">
            <MultipleUploadFileList sendButtonTxt="Об'єднати" onSendFiles={onSendFilesHandler} />
        </section>
    );
};

export default InvoiceMergeSection;