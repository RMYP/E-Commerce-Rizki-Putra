"use client";

import * as z from "zod";
import { CardForm } from "../components/cardForm";
import { loginSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Login } from "./action";
import { useState } from "react";
import ErrorForm from "../components/errorForm";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

export const LoginForm = () => {
    const [error, setError] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });


    const onSubmit = (value: z.infer<typeof loginSchema>) => {
        setError("");
        Login(value)
            .then((response: any) => {
                console.log(response)
                setError(response.error);
        }).catch((error: any) => {
            console.log(error)
            setError("An unexpected error occurred.");
        });
    };

    return (
        <CardForm>
            <div className="grid gap-4">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="m@example.com"
                                                {...field}
                                                type="email"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="password"
                                                {...field}
                                                type="password"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                           <ErrorForm message={error} />
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </form>
                </Form>
                <Button variant="outline" className="w-full">
                    Login with Google
                </Button>
            </div>
        </CardForm>
    );
};
