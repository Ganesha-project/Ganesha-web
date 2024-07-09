import { Title } from "./Title"

export const ClientLogo = () => {
    let data = [
        'https://png.pngtree.com/png-vector/20220730/ourmid/pngtree-m-company-logo-png-image_6092974.png',
        'https://png.pngtree.com/png-vector/20221115/ourmid/pngtree-company-logo-vector-png-image_6454975.png',
        'https://png.pngtree.com/png-clipart/20220919/original/pngtree-letter-s-and-n-company-logo-png-image_8624357.png',
        'https://png.pngtree.com/png-vector/20220730/ourmid/pngtree-m-company-logo-png-image_6092974.png',
        'https://png.pngtree.com/png-vector/20221115/ourmid/pngtree-company-logo-vector-png-image_6454975.png',
        'https://png.pngtree.com/png-clipart/20220919/original/pngtree-letter-s-and-n-company-logo-png-image_8624357.png',
        'https://png.pngtree.com/png-vector/20220730/ourmid/pngtree-m-company-logo-png-image_6092974.png',
        'https://png.pngtree.com/png-vector/20221115/ourmid/pngtree-company-logo-vector-png-image_6454975.png',
        'https://png.pngtree.com/png-clipart/20220919/original/pngtree-letter-s-and-n-company-logo-png-image_8624357.png',
        'https://png.pngtree.com/png-vector/20220730/ourmid/pngtree-m-company-logo-png-image_6092974.png',
        'https://png.pngtree.com/png-vector/20221115/ourmid/pngtree-company-logo-vector-png-image_6454975.png',
        'https://png.pngtree.com/png-clipart/20220919/original/pngtree-letter-s-and-n-company-logo-png-image_8624357.png',
        'https://png.pngtree.com/png-vector/20220730/ourmid/pngtree-m-company-logo-png-image_6092974.png',
        'https://png.pngtree.com/png-vector/20221115/ourmid/pngtree-company-logo-vector-png-image_6454975.png',
        'https://png.pngtree.com/png-clipart/20220919/original/pngtree-letter-s-and-n-company-logo-png-image_8624357.png',
        'https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-letter-m-logo-png-png-image_5686007.png',
        'https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-letter-n-logo-design-png-png-image_5687381.png',
        'https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-m-letter-logo-business-template-vector-icon-png-image_5287547.png',

    ]

    return (
        <>
            <section className="md:mx-24 mx-5 space-y-5 2xl:px-80">
                <Title text={'Our Clients'} className={'mb-10'}/>
                <div className="flex flex-wrap gap-5 justify-center">
                    {data.map((el, index) => (
                        <div key={index} className="dark:bg-white bg-opacity-50 rounded-full h-32 w-32 flex items-center p-2 relative group">
                            <img
                                className="object-contain w-full h-full"
                                src={el}
                                alt={el} />
                            <div className="absolute inset-0 group-hover:opacity-100 opacity-0 backdrop-blur-md duration-300 bg-white flex flex-col justify-center bg-opacity-50 ease-in-out rounded-full">
                                <h4 className="text-center truncate-last-2 text-gray-900 font-semibold">
                                    PT Cinta
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
