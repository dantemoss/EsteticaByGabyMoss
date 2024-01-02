

import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";


export default function ProductsSponsors() {
    return (
        
        <div className="flex justify-center items-center min-h-screen ">
            
            <div className="max-w-[1000px] gap-2 grid grid-cols-12 grid-rows-2 px-10">
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-end">
                        <p className="text-tiny text-black/90 uppercase font-bold">Las mejores marcas</p>
                        <h4 className="text-black font-medium text-large">Dando lo que mereces</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://i.pinimg.com/564x/3e/84/8f/3e848f43204d29a174cfbac18ec4293f.jpg"
                    />
                </Card>
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-end">
                        <p className="text-tiny text-white/90 uppercase font-bold">Plant a tree</p>
                        <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://i.pinimg.com/564x/c3/8a/1f/c38a1fa67e621164a0f9e0f1c91b141f.jpg"
                    />
                </Card>
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-end">
                        <p className="text-tiny text-white/90 uppercase font-bold">Cambios Profundos</p>
                        <h4 className="text-white font-medium text-large">Rejuveneciendo tu piel</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://i.pinimg.com/564x/66/55/ab/6655ab7ba3c11eb8ece92627fd98ab07.jpg"
                    />
                </Card>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/100 uppercase font-bold">Turnos</p>
                        <h4 className="text-black/100 font-medium text-2xl">Reserva tu turno aqui</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-105 -translate-y-6 object-cover"
                        src="https://i.pinimg.com/564x/36/cc/a8/36cca88b83b1846acf77f17b10ef62dd.jpg"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-black text-tiny">Ver</p>
                            <p className="text-black text-tiny">Turnos Disponibles</p>
                        </div>
                        <Button className="text-tiny" color="primary" radius="full" size="sm">
                            Acceder
                        </Button>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                    <CardHeader className="absolute z-10 top-1 flex-col items-end">
                        <p className="text-tiny text-black/90 uppercase font-bold">Relajación</p>
                        <h4 className="text-black/90 font-medium text-xl">Años de experiencia en tu tratamiento</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover"
                        src="https://i.pinimg.com/564x/93/0d/f8/930df85060681316b5a07cbaaf8d805f.jpg"
                    />
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                        <div className="flex flex-grow gap-2 items-center">
                            <Image
                                alt="Breathing app icon"
                                className="rounded-full w-10 h-11 bg-black"
                                src="/images/breathing-app-icon.jpeg"
                            />
                            <div className="flex flex-col">
                                <p className="text-tiny text-white/80">Dudas?</p>
                                <p className="text-tiny text-white/80">Accede a nuestro Whatsapp</p>
                            </div>
                        </div>
                        <Button radius="full" size="sm">Ir</Button>
                    </CardFooter>
                </Card>
            </div>

        </div>
        
        
        
    );
}
