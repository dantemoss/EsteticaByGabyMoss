import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";



export default function App() {
    return (
        <div className="background-general">
            <div>

                <Navbar
                    classNames={{

                        item: [
                            "flex",
                            "relative",
                            "h-full",
                            "items-center",
                            ],
                    }}
                >
                    <NavbarBrand>

                        <p className="font-bold text-inherit">GabyMoss Estetica</p>
                    </NavbarBrand>
                    <NavbarContent justify="end">

                        <NavbarItem>
                            <Button
                                as={Link}
                                className="bg-green-500 text-white rounded-full py-2 px-4"
                                href="https://wa.me/5491125879086?text=Hola!%20me%20gustaria%20agendar%20un%20turno."
                                variant="flat">
                                Contacto
                            </Button>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
            </div>

        </div>

    );
}
