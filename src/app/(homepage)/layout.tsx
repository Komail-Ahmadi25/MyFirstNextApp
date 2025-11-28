import { Vazirmatn } from "next/font/google";
const vazir = Vazirmatn({ subsets: ["latin"] });
import Link from "next/link";
import "../globals.css";
export default function layout({
  children,
}: // notifaction,
// profile,
// finance,
{
  children: React.ReactNode;
  // notifaction: React.ReactNode;
  // profile: React.ReactNode;
  // finance: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${vazir.className}`}>
        <div className="flex justify-between px-22 py-10 text-3xl bg-linear-to-bl from-blue-600 to-purple-500 font-bold">
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
        {children}
        {/* <div className="flex justify-between p-12 font-bold text-2xl">
          <div>{finance}</div>
          <div>{profile}</div>
          <div>{notifaction}</div>
        </div> */}
      </body>
    </html>
  );
}
