"use client"
import Link from "next/link";
import styles from "../page.module.css";



export default function Home({params}) {
 
  return (
    <main className={styles.main}>

        <h1>Blog Dinmic  page ={params.slug[0]}</h1>
  
      <Link href={"/"}>Home</Link>
    </main>

  );
}

