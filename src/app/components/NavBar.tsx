'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();

    console.log(pathname);
    
    return (
        <nav>
            <ul>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/calc"}>Calc Page</Link>
                </li>
            </ul>   
        </nav>
    );
}