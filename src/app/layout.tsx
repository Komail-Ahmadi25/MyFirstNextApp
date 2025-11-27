// import { Vazirmatn } from "next/font/google";
// const vazir = Vazirmatn({ subsets: ["latin"] });
import "./globals.css";
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
      <body>
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
