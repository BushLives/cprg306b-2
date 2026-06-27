import z, { int } from "zod";

export const addStudentSchema = z.object({
    firstName: z.string().min(2, "Please enter your first name."),
    lastName: z.string().min(2, "Please enter your last name."),
    dateOfBirth: z.string(),
    grade: z.string().max(2, "Please enter a letter grade")
})

export type studentData = z.infer<typeof addStudentSchema>