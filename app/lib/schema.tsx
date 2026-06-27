import z from "zod";

export const addStudentSchema = z.object({
    firstName: z.string().min(2, "Please enter your first name (>2 chars)."),
    lastName: z.string().min(2, "Please enter your last name (>2 chars)."),
    dateOfBirth: z.string(),
    grade: z.string().regex(/^(?:[A-D][+-]?|[F])$/, "Please enter a Letter grade from A-F with an optional + or -")
})

export type studentData = z.infer<typeof addStudentSchema>