'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();

    console.log(pathname);
    
    return (
        <nav className="p-4">
            <ul className="text-center">
                <li className="inline-block mx-2">
                    <Link className="border-b-4 hover:border-slate-400" href={"/"}>Розкладка</Link>
                </li>
                <li className="inline-block mx-2">
                    <Link className="border-b-4 hover:border-slate-400" href={"/invoice-merge"}>Сума накладних</Link>
                </li>
            </ul>   
        </nav>
    );
}