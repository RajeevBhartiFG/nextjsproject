"use client"
import Link from "next/link";
//import { usePathname } from "next/navigation";
export default function RootLayout({ children }) {


console.log("fdfdfsdfdsfdfds")
  return (
    <div>

      <br></br>
      
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link></li>
          <li className="breadcrumb-item">
            <Link href="/blog">Blog</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Blog Detail</li>
        </ol>
      </nav>
      {children}

      



    </div>


  );
}
