import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Search, Bell, ShoppingCart, LogInIcon, User } from "lucide-react";
import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = async () => {
    const Session = await auth();
    console.log(Session)
    return (
        <div>
            <header className="px-5 py-3 mb-4 bg-white shadow-sm">
                <nav className="flex justify-between items-center container mx-auto">
                    <Link href="/">Navbar</Link>

                    <div className="flex items-center gap-5">
                        <div className="flex items-center w-full md:w-auto justify-center ml-[1.5rem] md:ml-[3rem]">
                            <Input
                                id="search"
                                name="search"
                                type="text"
                                className="bg-gray-200 py-2 md:py-5 w-full md:w-[20rem] pe-[3rem]"
                                placeholder="Search here..."
                            />

                            <span className="relative right-8">
                                <Search className="w-5 h-5 text-gray-500" />
                            </span>
                        </div>
                        <div className="gap-3 flex items-center">
                            {Session && Session?.user ? (
                                <>
                                    <Link href="/">
                                        <Bell className="w-5 h-5 mr-3 cursor-pointer" />
                                    </Link>
                                    <Link href="/">
                                        <ShoppingCart className="w-5 h-5 mr-3 cursor-pointer" />
                                    </Link>
                                    <Link href={`/profile`}>
                                        <User className="w-5 h-5 cursor-pointer" />
                                    </Link>
                                </>
                            ) : (
                                <form
                                    action={async () => {
                                        "use server";
                                        await signIn("google");
                                    }}
                                >
                                    <Button type="submit" className="flex items-center gap-0 bg-neutral-700 text-white font-semibold">
                                        <p>Login</p>
                                        <div>
                                            <Image
                                                src="/google-logo.png"
                                                width={40}
                                                height={40}
                                                alt="Picture of the author"
                                            />
                                        </div>
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
