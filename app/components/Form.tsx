"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addStudentSchema, studentData } from "../lib/schema";
import FormField from "./FormField";
import { date } from "zod";

export default function Form() {
    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<studentData>({
        resolver: zodResolver(addStudentSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
        }
    });

    async function onSubmit(data: studentData) {
        await new Promise((resolve)=> setTimeout(resolve, 1200))
    }

    return (
        <main>
            <h2 className="">Add a Student</h2>
            <FormField label="First Name" error={errors.firstName?.message} required>
                <input type="text" {...register("firstName")}></input>
            </FormField>
            <FormField label="Last Name" error={errors.lastName?.message} required>
                <input type="text" {...register("lastName")}></input>
            </FormField>
            <FormField label="Date Of Birth" error={errors.dateOfBirth?.message} required>
                <input type="date" {...register("dateOfBirth")}></input>
            </FormField>
            <FormField label="Grade" error={errors.grade?.message} required>
                <input type="number" {...register("grade")}></input>
            </FormField>

            <button type="submit" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-slate-500 active:bg-blue-800 transition-colors duration-200">
                Add Student
            </button>

        </main>
    );
}