import z from "zod";

export const addStudentSchema = z.object({
    firstName: z.string().min(2, "Please enter your first name."),
    lastName: z.string().min(2, "Please enter your last name."),
    dateOfBirth: z.date({})
})

export type studentData = z.infer<typeof addStudentSchema>