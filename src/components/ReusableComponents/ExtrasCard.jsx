export const ExtrasCard = ({ data, accent1, accent2 }) => {
    const waLink = "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20Ganesha%20Consulting"

    return (
        <div className='flex  items-center justify-center'>
            <div className='m-10 lg:m-32'>
                {data.types.map((type, index) => (
                    <div key={index} className='mb-10 flex flex-col items-center justify-center'>
                        <h1 className={`${accent1} lg:mx-32 mx-10 font-extrabold text-3xl lg:text-5xl text-center uppercase lg:w-max text-white rounded-full p-10`}>{type.name}</h1>
                        <div className='lg:px-28 px-5 flex lg:w-[120%] lg:flex-wrap flex-col justify-center lg:flex-row'>
                            {type.products.map((product, productIndex) => (
                                <div key={productIndex} className={`${accent2} flex-shrink-0 lg:w-[50lvh] md:w-[45lvh] w-[40lvh] hover:bg-opacity-50 p-10 flex flex-col items-center justify-center mt-10 lg:my-10 lg:mx-5 rounded-[40px]`}>
                                    <h1 className='font-bold text-4xl text-center lg:text-center'>{product.name}</h1>
                                    <p className='mt-3 flex-grow font-semibold text-xl text-center lg:text-left'>{product.descriptions}</p>
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
