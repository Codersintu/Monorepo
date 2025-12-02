"use client"
import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import {TextInput} from "@repo/ui/text-input"
import { useRouter } from "next/navigation";
export default function Home() {
  const router=useRouter();
  return (
    <div className={styles.page}>
      <TextInput onChange="hello man" size="big" placeholder="chat input"/>
      <button onClick={()=>router.push("/chat/123")}>join chat</button>
    </div>
  );
}
