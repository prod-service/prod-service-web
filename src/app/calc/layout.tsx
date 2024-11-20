export default function CalcLayout({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <div>
            <p>nav</p>
            { children }
            <p>footer</p>
        </div>
    );
};