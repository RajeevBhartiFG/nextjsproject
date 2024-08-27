"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import {useRouter} from "next/navigation"

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <h1 className="text-danger">My next App</h1>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/about"}>About</Link>
      <button onClick={()=>router.push("/blog")}> Blog</button>
      <button onClick={()=>router.push("/about")}> About</button>
    </main>
  );
}
