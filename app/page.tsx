"use client"
import Form from "../app/components/Form";
import data from "../data/students.json";
import { useState } from "react";
import StudentSection from "./components/StudentSection";

export default function Home() {
  const [students, setStudents] = useState(1);
  return (
    <div className="flex flex-col flex-1 justify-center items-center font-sans pt-12">
      <Form/>
      <StudentSection/>
    </div>
  );
}
