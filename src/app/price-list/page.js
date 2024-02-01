import { ImgProduk } from '@/components/ImgProduk';
import socmed from "../../public/BG/list.jpg"
import { PriceListBanner } from '@/components/PriceListBanner';
import fs from 'fs'
import { CardWeb } from '@/components/WebComponents/CardWeb';
import { CardPriceDesign } from '@/components/SocmedComponents/CardPrideDesign';
import { CardPriceSocmed } from '@/components/SocmedComponents/CardPriceSocmed';
import { CardPricePt } from '@/components/LegalComponents/CardPricePt';
import { CardPricePma } from '@/components/LegalComponents/CardPricePma';
import { CardPriceBadanUsaha } from '@/components/LegalComponents/CardPriceBadanUsaha';
import { CardPriceCV } from '@/components/LegalComponents/CardPriceCv';

export default async function AllProductsPage() {
    let rawDataWeb = await fs.promises.readFile('public/JSON/WebPrice.json', 'utf-8');
    let dataWeb = JSON.parse(rawDataWeb);

    let rawDataSocmed = await fs.promises.readFile('public/JSON/SocmedPrice.json', 'utf-8');
    let dataSocmed = JSON.parse(rawDataSocmed);

    let rawDataDesign = await fs.promises.readFile('public/JSON/DesignPrice.json', 'utf-8');
    let dataDesign = JSON.parse(rawDataDesign);

    let rawDataPt = await fs.promises.readFile('public/JSON/PaketPT.json', 'utf-8');
    let dataPt = JSON.parse(rawDataPt);

    let rawDataCv = await fs.promises.readFile('public/JSON/PaketCV.json', 'utf-8');
    let dataCv = JSON.parse(rawDataCv);

    let rawDataPma = await fs.promises.readFile('public/JSON/PaketPma.json', 'utf-8');
    let dataPma = JSON.parse(rawDataPma);

    let rawDataBU = await fs.promises.readFile('public/JSON/BadanUsaha.json', 'utf-8');
    let dataBU = JSON.parse(rawDataBU);

    return (
        <>
            <ImgProduk styles={'mt-[2vw]'} socmed={socmed} stylesImg={'h-[90vh] w-auto'} />
            <PriceListBanner />
            <CardPriceSocmed data={dataSocmed} />
            <CardPriceDesign data={dataDesign} />
            <CardWeb data={dataWeb} />
            <CardPricePt data={dataPt} />
            <CardPriceCV data={dataCv} />
            <CardPricePma data={dataPma} />
            <CardPriceBadanUsaha data={dataBU} />
        </>
    )
}