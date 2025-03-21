'use client'

import { useEffect, useRef, useState } from "react";

interface FileUploadProps {
  title?: string,
  inputFileName?: string,
  fileExtension?: string[],
  onFileUpload: (file: File, name: string) => void;
  onRemoveFile: () => void;
};

const defaultFileExt = ['xls', 'xlsx'];
const defaultTitle = 'Обрати файл'; 

const FileUpload: React.FC<FileUploadProps> = ({
  title=defaultTitle,
  inputFileName,
  fileExtension = defaultFileExt,
  onFileUpload, onRemoveFile
}) => {
    const [fileName, setFileName] = useState<string>("");
    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const alertFileExtensionsText: string = fileExtension.map(f => '.'+f).join(', ');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
          const currentFileExtension = file.name.split(".").pop()?.toLowerCase() || '';
          if (!fileExtension.includes(currentFileExtension)) {
              alert(`Будь ласка, виберіть файл формату: ${alertFileExtensionsText}`);
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

      {!fileName && <p>{`формату ${alertFileExtensionsText}`}</p>}

      {fileName && <button onClick={handleFileRemove} className="px-2 py-1 bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-700">Видалити</button>}
    </div>
  );
};

export default FileUpload;
