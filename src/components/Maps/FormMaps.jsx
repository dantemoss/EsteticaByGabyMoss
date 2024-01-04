

const FormMaps = () => {
    return (
        <div>
            <section className="text-gray-600 body-font relative mt-20">
                <div className="absolute inset-0 bg-gray-300">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.7201232016373!2d-58.41032352339295!3d-34.585947656561416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca829309bd5b%3A0xcdd8e301c1cbdd37!2sAv.%20Cnel.%20D%C3%ADaz%202277%2C%20C1425DQI%20CABA!5e0!3m2!1ses-419!2sar!4v1704231630257!5m2!1ses-419!2sar" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                            Consultas
                        </h2>
                        <p className="leading-relaxed mb-5 text-gray-600">
                            Cualquier Consulta o duda que tengas dejanosla en nuestro formulario.
                        </p>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                defaultValue={""}
                            />
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Enviar
                        </button>
                        <p className="text-xs text-gray-500 mt-3">
                            Aclaracion, el servicio de consultas puede tardar mas de lo normal.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default FormMaps
