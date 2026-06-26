"use client"
import Image from "next/image";
import Form from "../app/components/Form";
import data from "../data/students.json";
import { useState } from "react";

export default function Home() {
  const [students, setStudents] = useState(1);
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <Form/>
    </div>
  );
}
