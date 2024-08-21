import { ReusableCards } from '@/components/ReusableCards';
import { BannerService } from '@/components/ServicesComponent/BannerService';
import { VirtualOfficePackages } from '../../../public/DB/OtherPackages';
import { Faqs } from '@/components/LegalComponents/Faqs';
import { dataPageVO } from '../Database';
import { CardVO } from '@/components/VirtualOffice/CardVO';
import { Benefit } from '@/components/VirtualOffice/Benefit';


export default async function VirtualOfficePage() {
    return (
        <>
            <BannerService />
            <ReusableCards
                data={VirtualOfficePackages}
                cardColor={'bg-gray-100'}
                typeColor={'text-gray-600'}
                priceColor={'text-gray-800'}
                buttonColor={'bg-gray-500'}
                label={'Paket Sewa Virtual Office'}
            />
            <CardVO />
            <Benefit />
            <Faqs
                text={'FAQ'}
                color={'gray'}
                className={'dark:!text-gray-100 !text-gray-800'}
                data={dataPageVO.FAQ}
            />
        </>
    );
}

