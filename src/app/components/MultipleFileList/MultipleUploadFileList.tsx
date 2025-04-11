import { useState } from "react";
import MultipleFileUpload, { ICustomFile } from "../MultipleFileUpload";
import ListItem from "./ListItem";

export interface IMultipleUploadFileListProps {
    sendButtonTxt?: string,
    onSendFiles: (files: ICustomFile[]) => void
};

const MultipleUploadFileList: React.FC<IMultipleUploadFileListProps> = ({ sendButtonTxt, onSendFiles }) => {
    const [fileList, setFileList] = useState<ICustomFile[]>([]);
    
    const onFileUpload = (files: ICustomFile[]) => {
        setFileList((prevList) => [...prevList, ...files]);
    };
    
    const removeListItem = (listItemId: number) => {
        setFileList((prevList) => [...prevList.filter(({id}) => id !== listItemId)]);
    };

    return (
        <div>
            <div className="text-center md:flex justify-center items-baseline mb-4">
                <MultipleFileUpload onFileUpload={onFileUpload} key={fileList.length || 'defaultKey'} />
                <button onClick={() => onSendFiles(fileList)} className="transition px-4 py-2 bg-emerald-400 text-white cursor-pointer hover:bg-emerald-500">
                    {sendButtonTxt || 'Send'}
                </button>
            </div>

            <ul className="flex flex-wrap justify-center">
                { fileList.map(({ id, file }, idx) => {
                    return <ListItem key={id + idx} title={file.name} onRemove={() => removeListItem(id)} />
                }) }
            </ul>

        </div>
    );
};

export default MultipleUploadFileList;