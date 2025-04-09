import { useState } from "react";
import MultipleFileUpload, { ICustomFile } from "../MultipleFileUpload";
import ListItem from "./ListItem";

const MultipleUploadFileList = () => {
    const [fileList, setFileList] = useState<ICustomFile[]>([]);
    
    const onFileUpload = (files: ICustomFile[]) => {
        setFileList((prevList) => {
            return [...prevList, ...files]
        });
    };
    
    const removeListItem = (listItemId: number) => {
        setFileList((prevList) => {
            return [...prevList.filter(({id}) => id !== listItemId)]
        });
    };

    return (
        <div className="border border-blue-500 rounded-lg p-4">
            <MultipleFileUpload onFileUpload={onFileUpload} />

            <ul className="flex flex-wrap justify-center">
                { fileList.map(({ id, file }, idx) => {
                    return <ListItem key={id + idx} title={file.name} onRemove={() => removeListItem(id)} />
                }) }
            </ul>
        </div>
    );
};

export default MultipleUploadFileList;