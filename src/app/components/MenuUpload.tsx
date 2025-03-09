'use client'

import FileUpload from "./FileUpload";

export default function MenuUpload() {
    const handlerUploading = (file: File) => {
        console.log(file);
    }

    return(
        <div className="menu-upload">
            <FileUpload onFileUpload={handlerUploading} />
        </div>
    );
}