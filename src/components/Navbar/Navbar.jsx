import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";



export default function App() {
    return (
        <div className="background-general">

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
                        
                        
                    ],
                }}
            >
                <NavbarBrand>
                    
                    <p className="font-bold text-inherit">GabyMoss Estetica</p>
                </NavbarBrand>
                <NavbarContent justify="end">
                    
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
                            Contacto
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
    );
}
