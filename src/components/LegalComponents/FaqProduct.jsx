import Image from 'next/image'
import explain from '../../public/BG/faq.png'
import { FaInfoCircle } from "react-icons/fa";
import { Faqs } from './Faqs';
import { dataPageBadanUsaha } from '@/app/Database';

export const FaqProduct = () => {
    return (
        <>
            <section className='md:mx-24 mx-5 py-24'>
                <div className="flex md:flex-row gap-5 justify-between">
               
                    <div className='w-full'>
                        <Faqs
                            className2={'!bg-slate-300 w-full'}
                            text={'FAQ'}
                            color={'slate'}
                            data={dataPageBadanUsaha.faqDataBU}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}