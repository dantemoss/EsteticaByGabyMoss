

const TextWelcome = () => {
    return (
        <div>
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="flex-1 sm:hidden lg:block">
                            <img src="https://i.pinimg.com/564x/36/cc/a8/36cca88b83b1846acf77f17b10ef62dd.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
                        </div>
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                            <h3 className="text-indigo-600 font-semibold">
                                Belleza y Bienestar | GabyMoss
                            </h3>
                            <p className="text-gray-800 text-2xl font-semibold sm:text-4xl">
                                Consultorio de Cosmiatria y Estética Aplicada
                            </p>
                            <p className="mt-3 text-black">
                                Descubrí tu Belleza Interior y Exterior en nuestro Consultorio de Cosmetología y Estética. Brindamos una variada oferta de servicios diseñados para resaltar tu atractivo natural y revitalizar tu piel. Desde tratamientos faciales rejuvenecedores hasta técnicas avanzadas de cuidado corporal, la Cosmiatra GabyMoss te acompañará en el camino hacia una apariencia radiante y saludable. ¡Embellecé tu vida y despertá tu mejor versión!
                            </p>
                            <a href="https://wa.me/5491125879086?text=Hola!%20me%20gustaria%20agendar%20un%20turno." className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                                Agendar Turno
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TextWelcome