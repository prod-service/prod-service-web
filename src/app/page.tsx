'use client'

import Image from "next/image";
import "./styles/globals.scss";
import Link from "next/link";
import MenuUpload from "./components/menu/MenuUpload";
import { useState } from "react";
import { IMenuObj } from "./lib/menu-table-parser";
import MenuFullList from "./components/menu/MenuFullList";
import { exportToExcel } from "./lib/exportToExcel";

const Home: React.FC = () => {
  const [mainMenu, setMainManu] = useState({});

  const menuUploadHandler = (menu: IMenuObj | object) => {
    setMainManu(menu);
  };

  const menuRemoveHandler = () => setMainManu({});

  const data = [
    { id: 1, name: 'Іван', age: 25 },
    { id: 2, name: 'Марія', age: 30 },
    { id: 3, name: 'Олександр', age: 22 }
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div
        className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
      />
        <Image
          className="hidden md:block"
          src="/HERO-IMAGE_Hot-bar.jpg"
          alt="Main logo"
          width={180}
          height={38}
          priority
        />
        <Link href={'/calc'}>Calc page</Link>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => exportToExcel(data, 'Users.xlsx')}
      >
        Експортувати у Excel
      </button>

        <MenuUpload onMenuUpload={menuUploadHandler} onMenuRemove={menuRemoveHandler} />

        <MenuFullList menuObject={mainMenu} />

      </main>
    </div>
  );
};

export default Home;
