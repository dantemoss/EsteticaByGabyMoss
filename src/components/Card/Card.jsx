import React from 'react'

const Card = () => {
    return (
        <div>
            <>
                {/* component */}
                <section className="background-general">
                    <div className="container px-6 py-10 mx-auto">
                        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-black">
                            Servicios de la mano <br /> de las mejores{" "}
                            <span className="underline decoration-indigo-500">Marcas cosmeticas</span>
                        </h1>
                        <p className="mt-4 text-gray-500 xl:mt-6 dark:text-black">
                            Nuestra misión es dar el mejor servicio, para ello, nuestros productos deben ser los mejores también.
                        </p>
                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                            <div className="p-8 space-y-3 border-2 border-indigo-400 dark:border-indigo-300 rounded-xl">
                                <span className="inline-block text-indigo-500 dark:text-black-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                                        />
                                    </svg>
                                </span>
                                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-black">
                                    Marcas Prestigiosas
                                </h1>
                                <p className="text-gray-500 dark:text-black">
                                Asociados con marcas líderes en cosmética: <span className="underline decoration-indigo-500 text-black">LACA, PRODERMIC y EXEL.</span>  Estas marcas de prestigio mundial destacan por su excelencia, innovación y calidad superior, ofreciendo productos cosméticos de alto valor y eficacia.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-indigo-500 dark:text-white hover:underline hover:text-indigo-600 dark:hover:text-indigo-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-indigo-300 rounded-xl">
                                <span className="inline-block text-indigo-500 dark:text-indigo-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                                        />
                                    </svg>
                                </span>
                                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-black">
                                    Experiencia Profesional
                                </h1>
                                <p className="text-gray-500 dark:text-black">
                                Con más de 30 años de experiencia en el rubro, Gabriela Di Gangi es una profesional destacada en el ámbito de la belleza y la cosmética. Su amplio conocimiento y dedicación han consolidado una trayectoria que se refleja en resultados excepcionales para sus clientes. Con un compromiso continuo con la innovación y las últimas tendencias, Gabriela sigue siendo una referencia confiable en la industria de la belleza.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex p-2 text-indigo-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-indigo-500 dark:text-white hover:underline hover:text-indigo-600 dark:hover:text-indigo-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className="p-8 space-y-3 border-2 border-indigo-400 dark:border-indigo-300 rounded-xl">
                                <span className="inline-block text-indigo-500 dark:text-indigo-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                        />
                                    </svg>
                                </span>
                                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-black">
                                    Tratamientos Personalizados
                                </h1>
                                <p className="text-gray-500 dark:text-black">
                                En nuestro centro de belleza, comprendemos que cada persona es única. Es por eso que ofrecemos tratamientos personalizados diseñados específicamente para satisfacer las necesidades individuales de cada cliente. Nuestro enfoque personalizado garantiza resultados óptimos, ya que consideramos cuidadosamente los objetivos y características únicas de cada persona. Confiamos en que nuestros tratamientos adaptados proporcionarán una experiencia de belleza verdaderamente personalizada y satisfactoria.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex p-2 text-indigo-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-indigo-500 dark:text-white hover:underline hover:text-indigo-600 dark:hover:text-indigo-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="fixed inset-x-0 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-8">
                    <div className="lg:w-72 px-6 lg:px-0">
                        
                    </div>
                </div>
            </>

        </div>
    )
}

export default Card

