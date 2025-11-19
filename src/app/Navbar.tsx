"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
function Navbar() {
    const pathname = usePathname();
    const navLinks: { id: string, name: string, href: string }[] = [
        {
            id: "H",
            name: "Home",
            href: "/"
        },
        {
            id: "C",
            name: "Count",
            href: "/count"
        },
        {
            id: "L",
            name: "Login",
            href: "/login"
        },
        {
            id: "S",
            name: "Services",
            href: "/services"
        },
        {
            id: "P",
            name: "Post",
            href: "/post"
        }
    ];
    return (
        <div>
            <nav className='flex justify-between p-8'>
                {navLinks.map(nav => {
                    const isActive = pathname === nav.href || (pathname.startsWith(nav.href) && nav.href !== "/")
                    return (
                        <Link className={isActive ? "text-blue-500 text-2xl font-bold" : "text-gray-400 text-2xl font-bold"} key={nav.id} href={nav.href}>{nav.name}</Link>
                    )
                })}
            </nav>
        </div>
    )
}

export default Navbar
