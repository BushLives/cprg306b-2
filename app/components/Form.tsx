"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addStudentSchema, studentData } from "../lib/schema";
import FormField from "./FormField";
import { date } from "zod";
import SubmittedSuccess from "./SubmittedSuccess";
import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';

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

    if (isSubmitSuccessful) 
    {
        return (<SubmittedSuccess />)
    }

    return (
        <div className="bg-slate-100 dark:bg-slate-200 px-8 pt-8 pb-4 rounded-lg mb-4">
            <h2 className="text-lg font-semibold mb-2 text-center border-b border-slate-600 text-slate-950">Add a Student</h2>
            <form className="flex flex-col py-2 gap-1" onSubmit={handleSubmit(onSubmit)}>
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
                    <input type="text" {...register("grade")}></input>
                </FormField>
                <div className="w-full flex justify-end">
                    {
                        isSubmitting && <Icon className="self-center mx-1" path={mdiLoading}
                        title="User Profile"
                        size={1}
                        horizontal
                        vertical
                        rotate={90}
                        color="black"
                        spin
                    />
                    }
                    <button type="submit" className="rounded-lg bg-slate-700 px-4 py-2 text-sm mt-2 font-medium
                    text-white shadow-sm hover:bg-slate-500 active:bg-blue-800 transition-colors 
                    duration-200">
                        Add Student
                    </button>
                </div>
            </form>
            
        </div>
    );
}