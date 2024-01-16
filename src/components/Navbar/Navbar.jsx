import { dm_sans } from "@/app/ui/fonts";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";




export default function Navbar() {
    return (

        <div className={`${dm_sans.className} antialiased`}>
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Estética GabyMoss</span>
                    </a>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <Button
                                    as={Link}
                                    className="bg-green-500 text-white rounded-full py-2 px-4 "
                                    href="https://wa.me/5491125879086?text=Hola!%20me%20gustaria%20agendar%20un%20turno."
                                    variant="flat">
                                    Contacto
                                </Button>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    );
}
