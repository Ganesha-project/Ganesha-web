'use client'

import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa6';
import { Title } from './Title';
import { useState } from 'react';
import SkeletonImage from './Skeleton/SkeletonImage';
import { ClientsReview } from '../../public/Data/Clients';


export const ClientPhotos = () => {
    const [imageLoading, setImageLoading] = useState(true);

    const handleImageLoad = (idx) => {
        setImageLoading((prev) => ({
            ...prev,
            [idx]: false
        }));
    };

    return (
        <>
            <section classNa me='relative overflow-hidden py-16'>
                <div className='md:mx-24 mx-5 mt-10'>
                    <Title className={'flex justify-center'} text={'Our Clients'} icon={<FaQuoteRight />} iconClassName={'text-red-500'} />
                </div>
                <div className='marquee noBar'>
                    <div className='flex gap-5 md:gap-10 marquee-content py-16'>
                        {ClientsReview.concat(ClientsReview).map((el, idx) => (
                            <>
                                {el.clientPhoto ? (
                                    <div key={idx} className='marquee-items md:min-w-[30vw] min-w-[80lvw] h-[65lvh] md:h-[70vh] relative group duration-300 ease-in-out hover:scale-105 hover:drop-shadow-md rounded-3xl hover:shadow-[0px_2px_35px_0px_#682D79] dark:hover:shadow-[0px_2px_35px_0px_#A781A9]'>
                                        {imageLoading[idx] && <SkeletonImage className='object-cover rounded-3xl h-full w-full' />}
                                        <Image
                                            width={500}
                                            height={500}
                                            className={`object-cover rounded-3xl h-full w-full ${imageLoading[idx] ? 'hidden' : 'block'}`}
                                            src={el.clientPhoto}
                                            alt={el.ptName}
                                            onLoadingComplete={() => handleImageLoad(idx)}
                                        />
                                        {/* <span className='absolute inset-0 mt-auto bg-gradient-to-t from-[#1a1a1ab0] to-transparent rounded-3xl h-[50%]'></span> */}
                                        {/* <div className='absolute bottom-0 p-5 space-y-1 overflow-hidden group-hover:backdrop-blur-md bg-opacity-0 group-hover:bg-opacity-100 duration-300 ease-in-out group-hover:bg-[#00000070] rounded-3xl'>
                                    <div className='flex flex-col gap-1'>
                                        <h1 className='px-2 py-1 text-sm backdrop-blur-md text-baseColor w-fit rounded-full font-semibold'>
                                            {el.service}
                                        </h1>
                                        <h2 className='md:text-xl font-semibold text-white'>
                                            {el.ptName}
                                        </h2>
                                    </div>
                                    <p className='text-gray-50 truncate-last'>
                                        {el.review}
                                    </p>
                                </div> */}
                                    </div>
                                ) :
                                    null
                                }
                            </>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
