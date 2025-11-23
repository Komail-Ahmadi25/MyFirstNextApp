import { Vazirmatn } from 'next/font/google'
const vazir = Vazirmatn({ subsets: ['latin'] })
import "./globals.css"
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: {
        default: "HOME",
        template: "%s | Komail Ahmadi",
    },
    description: "Created with NExt.JS",
};
export default function layout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en">
            <body className={vazir.className}>
                {children}
            </body>
        </html>
    )
}
