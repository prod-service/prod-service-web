'use client'

import { useEffect, useRef, useState } from "react";

interface FileUploadProps {
  title?: string,
  inputFileName?: string,
  onFileUpload: (file: File, name: string) => void;
  onRemoveFile: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ title="Обрати файл", inputFileName, onFileUpload, onRemoveFile }) => {
    const [fileName, setFileName] = useState<string>("");
    const hiddenFileInput = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
        const fileExtension = file.name.split(".").pop()?.toLowerCase();
        if (fileExtension !== "xls" && fileExtension !== "xlsx") {
            alert("Будь ласка, виберіть файл Excel (.xls або .xlsx)");
            return;
        }

        setFileName(file.name);
        onFileUpload(file, file.name);
        }

    };
    const handleFileRemove = () => {
        if (hiddenFileInput.current?.value) hiddenFileInput.current.value = '';
        setFileName("");
        onRemoveFile();
      };
      
    useEffect(() => {
      if (inputFileName) setFileName(inputFileName)
    }, [inputFileName])

  return (
    <div className="flex flex-col items-center gap-2 p-4 border border-blue-500 rounded-lg">
      <input
        ref={hiddenFileInput}
        type="file"
        accept=".xls,.xlsx"
        onChange={handleFileChange}
        className="hidden"
        id="fileInput"
        // key={fileName ? fileName : 'default'}
      />
      <label htmlFor="fileInput" className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600">
        { title }
      </label>
      {fileName && <p className="text-gray-700">📄 {fileName}</p>}

      {!fileName && <p>формату .xls, .xlsx</p>}

      {fileName && <button onClick={handleFileRemove} className="px-2 py-1 bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-700">Видалити</button>}
    </div>
  );
};

export default FileUpload;
