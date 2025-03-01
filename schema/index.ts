import * as z from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(64),
    name: z.string(),
})

// just test