"use server";

import prisma from "@/lib/prisma";

interface User {
    email: string;
    password: string;
}

export const Login = async (value: User) => {
    const { email, password } = value;

    const checkEmail = await prisma.user.findUnique({ where: { email } });
    if (!checkEmail) {
        return { error: "Account not found" }; 
    }

    return { success: true }; 
};
