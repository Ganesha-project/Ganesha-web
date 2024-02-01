import fs from 'fs'
import socmed from "../../public/BG/cs.jpg"
import { ContactUsPage } from "@/components/ContactUsBanner";
import { ImgProduk } from '@/components/ImgProduk';
import { BodyContact } from "@/components/BodyContact";

export default async function ContactPage() {

    return (
        <>
            <ImgProduk styles={'mt-[2vw]'} socmed={socmed} stylesImg={'h-[90vh] w-auto'} />
            <ContactUsPage/>
            <BodyContact />
        </>
    )
}