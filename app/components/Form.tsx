"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addStudentSchema, studentData } from "../lib/schema";

export default function Form() {
    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors },
    } = useForm<studentData>({
        resolver: zodResolver(addStudentSchema)
    });

    async function onSubmit(data: studentData) {
        await new Promise((resolve)=> setTimeout(resolve, 1200))
    }

    return (
        <main>
            <h2>Add a Student</h2>
            <div>
                <label>First Name </label>
                <input type="text" {...register("firstName")}></input>
                
            </div> 
            <div>
                <label>Last Name </label>
                <input type="text" {...register("lastName")}></input>
            </div> 
            <div>
                <label>Date of Birth </label>
                <input type="text" {...register("dateOfBirth")}></input>
               
            </div> 
            <div>
                <label>Grade </label>
                <input></input>
               
            </div> 

        </main>
    );
}