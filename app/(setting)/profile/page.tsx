import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableCaption,
} from "@/components/ui/table";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const userPage = () => {
    return (
        <div>
            <SidebarInset>
                <div className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b mb-4">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1 mx-auto" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                        <h1>Profile</h1>
                    </div>
                </div>
                <div className="p-4 pt-0">
                    <div className=" flex flex-col lg:flex-row rounded-xl border lg:p-8 gap-5">
                        <section className="max-w-[284px]">
                            <Card className="shadow-md">
                                <CardContent>
                                    <div className="relative w-[258px] h-[258px] overflow-hidden">
                                        <Image
                                            src="https://lh3.googleusercontent.com/a/ACg8ocJHrR9oayO1yBiCVQqDaFOdl-czZb--Pwzv5KQO-MNdK3vNC4qz=s180-c"
                                            alt="Profile Picture"
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <Button
                                        variant="outline"
                                        className="w-full mt-5"
                                    >
                                        Pilih Foto
                                    </Button>
                                    <div className="text-xs mt-3 text-gray-500">
                                        <p>
                                            Besar file: maksimum 10.000.000
                                            bytes (10 Megabytes). Ekstensi file
                                            yang diperbolehkan: .JPG .JPEG .PNG
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Button
                                variant="outline"
                                className="w-full mt-5 shadow-md"
                            >
                                Reset kata sandi
                            </Button>
                        </section>

                        <section className="border w-full rounded-xl p-4 text-slate-700 mt-5 lg:mt-0 shadow-md">
                            <div className="text-slate-700 text-xl">
                                <p>Ubah Kontak</p>
                            </div>
                            <Table className="w-full table-auto">
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="text-base text-left whitespace-nowrap">
                                            Nama
                                        </TableCell>
                                        <TableCell className="text-base text-left whitespace-nowrap">
                                            Rizki Mauludin Yoga Prasetyo
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-base text-left whitespace-nowrap">
                                            Tanggal Lahir
                                        </TableCell>
                                        <TableCell className="text-base text-left whitespace-nowrap">
                                            16 Juli 2003
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-base text-left whitespace-nowrap">
                                            Nomor Hp
                                        </TableCell>
                                        <TableCell className="text-base text-left whitespace-nowrap">
                                            089678762891
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-base text-left whitespace-nowrap">
                                            Email
                                        </TableCell>
                                        <TableCell className="text-base text-left whitespace-nowrap">
                                            example@email.com
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </section>
                    </div>
                </div>
            </SidebarInset>
        </div>
    );
};

export default userPage;
