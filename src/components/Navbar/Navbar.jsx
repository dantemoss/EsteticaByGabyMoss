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
                                href="#"
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
