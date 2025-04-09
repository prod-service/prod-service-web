'use client'

import { useEffect, useRef, useState } from "react";

export interface ICustomFile {
  file: File,
  id: number,
}

interface FileUploadProps {
  title?: string,
  inputFileName?: string,
  fileExtension?: string[],
  onFileUpload: (files: ICustomFile[]) => void;
  // onRemoveFile: () => void;
};

const defaultFileExt = ['xls', 'xlsx'];
const defaultTitle = 'Обрати файли'; 

const MultipleFileUpload: React.FC<FileUploadProps> = ({
  title=defaultTitle,
  fileExtension = defaultFileExt,
  onFileUpload,
}) => {
    const [fileName, setFileName] = useState<string>("");
    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const alertFileExtensionsText: string = fileExtension.map(f => '.'+f).join(', ');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        const files = target.files; 

        if (files) onFileUpload(Array.from(files).map((f: File) => {
          return {file: f, id: Date.now() + f.size * Math.floor(Math.random() * 10)};
        }));
    };
      
  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <input
        ref={hiddenFileInput}
        type="file"
        accept=".xls,.xlsx"
        onChange={handleFileChange}
        className="hidden"
        id="fileInput"
        multiple
        // key={fileName ? fileName : 'default'}
      />
      <label htmlFor="fileInput" className="transition px-4 py-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-600">
        { title }
      </label>
      
      {fileName && <p className="text-gray-700">📄 {fileName}</p>}

      {!fileName && <p>{`формату ${alertFileExtensionsText}`}</p>}

      {/* {fileName && <button onClick={handleFileRemove} className="px-2 py-1 bg-red-500 text-white cursor-pointer hover:bg-red-700">Видалити</button>} */}
    </div>
  );
};

export default MultipleFileUpload;
