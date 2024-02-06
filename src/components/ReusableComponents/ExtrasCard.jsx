export const ExtrasCard = ({ data, accent1, accent2 }) => {
    const waLink = "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20Ganesha%20Consulting"

    return (
        <div className='flex items-center justify-center'>
            <div className='m-10'>
                {data.types.map((type, index) => (
                    <div key={index} className='mb-10 flex flex-col items-center justify-center'>
                        <h1 className={`${accent1} lg:mx-32 mb-10 mx-10 font-extrabold text-3xl lg:text-4xl text-center uppercase text-white rounded-full p-5`}>{type.name}</h1>
                        <div className='px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center'>
                            {type.products.map((product, productIndex) => (
                                <div key={productIndex} className={`${accent2} flex-shrink-0 lg:w-[50lvh] md:w-[45lvh] w-[40lvh] hover:bg-opacity-50 p-10 flex flex-col items-center justify-center rounded-[40px]`}>
                                    <h1 className='font-bold text-2xl text-center lg:text-center'>{product.name}</h1>
                                    <p className='mt-3 flex-grow font-semibold text-lg text-center lg:text-left'>{product.descriptions}</p>
                                    <a href={waLink} className={`${accent1} hover:bg-opacity-50 p-3 rounded-[40px] mt-5 w-full text-center text-white font-bold block lg:inline-block`}>
                                        Konsultasi Sekarang
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
