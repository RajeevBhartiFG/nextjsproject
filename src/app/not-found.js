import styles from "./page.module.css";
import Link from "next/link";
export default function NotFound() {
  return (
    <main className={styles.main}>
      
      <h1 className="text-danger">Page Note Found</h1>
    
      <Link href={"/"}>Home</Link>
  
    </main>
  );
}
