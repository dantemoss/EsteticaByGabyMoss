import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "../Navbar/Logo.jsx";

export default function App() {
    return (
        <Navbar
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-primary",
                    
                ],
            }}
        >
            <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit">GabyMoss Estetica</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Servicios
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Productos
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Tratamientos
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Contacto
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
