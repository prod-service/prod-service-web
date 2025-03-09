'use client'

import { useRef, useState } from "react";

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
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
        onFileUpload(file);
        }

    };
    const handleFileRemove = () => {
        if (hiddenFileInput.current?.value) hiddenFileInput.current.value = '';
        setFileName("");
    };

  return (
    <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
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
        Обрати файл
      </label>
      {fileName && <p className="text-gray-700">📄 {fileName}</p>}

      {fileName && <button onClick={handleFileRemove} className="px-2 py-1 bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-700">Remove</button>}
    </div>
  );
};

export default FileUpload;
